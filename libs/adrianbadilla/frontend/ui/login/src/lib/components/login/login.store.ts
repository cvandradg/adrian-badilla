import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { User, UserCredential } from 'firebase/auth';
import { Credentials } from '@adrianbadilla/shared/types/general-types';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';
import {
  map,
  pipe,
  from,
  EMPTY,
  forkJoin,
  switchMap,
  Observable,
  catchError,
  throwError,
} from 'rxjs';

@Injectable()
export class LoginStore extends ComponentStoreMixinHelper<
  Record<string, unknown>
> {
  constructor() {
    super({});
  }

  readonly googleSignin$ = this.effect<void>(
    pipe(
      this.responseHandler(
        switchMap(() => this.authService.googleSignin().pipe(this.onLogin))
      )
    )
  );

  readonly accessAccount$ = this.effect(
    (credentials$: Observable<Credentials>) =>
      credentials$.pipe(
        this.responseHandler(
          switchMap((credentials: Credentials) =>
            this.authService.login(credentials).pipe(this.onLogin)
          )
        )
      )
  );

  get onLogin() {
    return pipe(
      switchMap((user: UserCredential) =>
        from(this.firestore.setUser(user)).pipe(
          map(() => user.user),
          catchError(() => throwError(() => ({ user })))
        )
      ),
      tapResponse(this.onSuccess, ({ error, user }) => {
        this.onSigninError$(user);
        this.handleError(error);
      })
    );
  }

  get onSuccess() {
    return (user: User) => {
      this.facade.storeUser(user);
      user.emailVerified
        ? this.router.navigate(['dashboard'])
        : this.authService.sendEmailVerification(user);
    };
  }

  readonly onSigninError$ = this.effect((user$: Observable<UserCredential>) =>
    user$.pipe(
      switchMap((user: UserCredential) => {
        return this.authService.additionalUserInfo(user)?.isNewUser
          ? forkJoin([
              from(this.firestore.deleteUser(user.user)),
              from(this.authService.deleteCurrentUser(user.user)),
            ])
          : EMPTY;
      })
    )
  );
}
