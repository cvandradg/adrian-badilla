import { User } from 'firebase/auth';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { Credentials } from '@shared-modules/types/types';
import { Observable, switchMap } from 'rxjs';
import { ComponentStoreMixinHelper } from '@classes/component-store-helper';

@Injectable()
export class RegisterStore extends ComponentStoreMixinHelper<{ user: any }> {
  constructor() {
    super({ user: null });
  }

  readonly user$ = this.select((state) => state.user);

  readonly setUser = this.updater((state, user: any) => ({
    ...state,
    loading: false,
    user,
  }));

  readonly createAccount$ = this.effect((formGroup$: Observable<FormGroup>) => {
    return formGroup$.pipe(
      this.responseHandler(
        switchMap((formGroup) =>
          this.authService.createAccount(formGroup.value as Credentials).pipe(
            tapResponse((userInfo: User) => {
              formGroup.controls['pass'].disable();
              formGroup.controls['user'].disable();
              this.setUser(userInfo);
              this.facade.storeUserInfo(userInfo);
              this.authService.sendEmailVerification(userInfo);
            }, this.handleError)
          )
        )
      )
    );
  });
}
