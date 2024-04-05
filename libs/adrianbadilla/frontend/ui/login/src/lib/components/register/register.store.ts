import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { User, UserCredential } from 'firebase/auth';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';
import {
  map,
  from,
  EMPTY,
  forkJoin,
  switchMap,
  catchError,
  Observable,
  throwError,
} from 'rxjs';
import {
  NothingOr,
  Credentials,
} from '@adrianbadilla/shared/types/general-types';

@Injectable()
export class RegisterStore extends ComponentStoreMixinHelper<{
  user: NothingOr<User>;
}> {
  constructor() {
    super({ user: null });
  }

  readonly user$ = this.select((state) => state.user);

  readonly setUser = this.updater((state, user: User) => ({
    ...state,
    loading: false,
    user,
  }));

  readonly createAccount$ = this.effect((formGroup$: Observable<FormGroup>) => {
    return formGroup$.pipe(
      this.responseHandler(
        switchMap((formGroup: FormGroup) =>
          this.authService.createAccount(formGroup.value as Credentials).pipe(
            switchMap((user: UserCredential) =>
              from(this.firestore.setUser(user)).pipe(
                map(() => user.user),
                catchError(() => throwError(() => ({ user })))
              )
            ),
            tapResponse(this.onSuccess(formGroup), ({ error, user }) => {
              this.handleError(error);
              this.onSigninError$(user);
            })
          )
        )
      )
    );
  });

  onSuccess(formGroup: FormGroup) {
    return (user: User) => {
      formGroup.controls['user'].disable();
      formGroup.controls['pass'].disable();

      this.setUser(user);

      this.authService.sendEmailVerification(user);
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
