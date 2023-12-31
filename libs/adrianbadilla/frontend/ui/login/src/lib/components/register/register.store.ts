import { UserCredential } from 'firebase/auth';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import {
  Credentials,
  NothingOr,
} from '@adrianbadilla/shared/types/general-types';
import { Observable, switchMap } from 'rxjs';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';

@Injectable()
export class RegisterStore extends ComponentStoreMixinHelper<{
  user: NothingOr<UserCredential>;
}> {
  constructor() {
    super({ user: null });
  }

  readonly user$ = this.select((state) => state.user);

  readonly setUser = this.updater((state, user: UserCredential) => ({
    ...state,
    loading: false,
    user,
  }));

  readonly createAccount$ = this.effect((formGroup$: Observable<FormGroup>) => {
    return formGroup$.pipe(
      this.responseHandler(
        switchMap((formGroup) =>
          this.authService.createAccount(formGroup.value as Credentials).pipe(
            tapResponse((user: UserCredential) => {
              formGroup.controls['pass'].disable();
              formGroup.controls['user'].disable();
              this.setUser(user);
              this.facade.storeUser(user.user);
              this.authService.sendEmailVerification(user.user);
            }, this.handleError)
          )
        )
      )
    );
  });
}
