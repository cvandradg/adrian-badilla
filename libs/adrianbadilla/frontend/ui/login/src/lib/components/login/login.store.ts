import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { User, UserCredential } from 'firebase/auth';
import { Credentials } from '@adrianbadilla/shared/types/general-types';
import { Observable, switchMap, pipe, catchError, EMPTY, forkJoin } from 'rxjs';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';

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
        switchMap(() =>
          this.authService.googleSignin().pipe(
            switchMap((user: UserCredential) =>
              this.firestore.setUser(user).pipe(
                catchError((error) => {
                  this.onSigninError$(user);
                  throw error;
                })
              )
            ),
            tapResponse(this.onSuccess, this.handleError)
          )
        )
      )
    )
  );

  readonly accessAccount$ = this.effect(
    (credentials$: Observable<Credentials>) =>
      credentials$.pipe(
        this.responseHandler(
          switchMap((credentials: Credentials) =>
            this.authService.login(credentials).pipe(
              switchMap((user: UserCredential) => this.firestore.setUser(user)),
              tapResponse(this.onSuccess, this.handleError)
            )
          )
        )
      )
  );

  readonly onSigninError$ = this.effect((user$: Observable<UserCredential>) =>
    user$.pipe(
      switchMap((user: UserCredential) => {
        return this.authService.additionalUserInfo(user)?.isNewUser
          ? forkJoin([
              this.authService.deleteCurrentUser(user.user),
              this.firestore.deleteUser(user.user),
            ])
          : EMPTY;
      })
    )
  );

  get onSuccess() {
    return (user: User) => {
      if (user.emailVerified) {
        this.router.navigate(['dashboard']);
        return;
      }
      this.authService.sendEmailVerification(user);
    };
  }
}
