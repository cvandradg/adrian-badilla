import { UserCredential } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { Credentials } from '@types';
import { tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, pipe } from 'rxjs';
import { ComponentStoreMixinHelper } from '@classes/component-store-helper';

@Injectable()
export class LoginStore extends ComponentStoreMixinHelper<object> {
  constructor() {
    super({});
  }

  readonly googleSignin$ = this.effect<void>(
    pipe(
      this.responseHandler(
        switchMap(() =>
          this.authService.googleSignin().pipe(
            tapResponse((userInfo: UserCredential) => {
              this.facade.storeUser(userInfo.user);
              userInfo.user.emailVerified &&
                this.router.navigate(['/dashboard']);
            }, this.handleError)
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
              tapResponse((userInfo: UserCredential) => {
                this.facade.storeUser(userInfo.user);

                if (userInfo.user.emailVerified) {
                  this.router.navigate(['/dashboard']);
                  return;
                }

                this.authService.sendEmailVerification(userInfo.user);
              }, this.handleError)
            )
          )
        )
      )
  );
}
