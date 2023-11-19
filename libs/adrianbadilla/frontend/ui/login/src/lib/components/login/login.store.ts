import { User } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { deepCopy, Credentials } from '@types';
import { ComponentStoreMixinHelper } from '@classes/component-store-helper';
import { Observable, switchMap, pipe } from 'rxjs';

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
            tapResponse((response: any) => {
              const userInfo = deepCopy(response);

              this.facade.storeUserInfo(userInfo);
              userInfo.emailVerified && this.router.navigate(['/dashboard']);
              
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
          switchMap((credentials:Credentials) =>
            this.authService.auth(credentials).pipe(
              tapResponse((user: User) => {
                const userInfo = user;

                this.facade.storeUserInfo(userInfo);

                if(userInfo.emailVerified){
                  this.router.navigate(['/dashboard']);
                  return
                }

                this.authService.sendEmailVerification(user);
              }, this.handleError)
            )
          )
        )
      )
  );
}
