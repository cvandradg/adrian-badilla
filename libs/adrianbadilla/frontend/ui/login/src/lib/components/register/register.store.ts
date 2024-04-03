import { User, UserCredential } from 'firebase/auth';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import {
  Credentials,
  NothingOr,
} from '@adrianbadilla/shared/types/general-types';
import { Observable, firstValueFrom, switchMap } from 'rxjs';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';
import { FirebaseError } from 'firebase/app';

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
        switchMap((formGroup) =>
          this.authService.createAccount(formGroup.value as Credentials).pipe(
            switchMap((user: UserCredential) => this.firestore.setUser(user)),
            tapResponse(
              (user: User) => {
                formGroup.controls.disable();

                this.setUser(user);
                this.router.navigate(['dashboard']);

                this.authService.sendEmailVerification(user);
              },
              (error: FirebaseError) => this.handleError(error)
            )
          )
        )
      )
    );
  });
}
