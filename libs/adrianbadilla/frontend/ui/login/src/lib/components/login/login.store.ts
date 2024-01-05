import { UserCredential } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { Credentials } from '@adrianbadilla/shared/types/general-types';
import { tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, pipe } from 'rxjs';
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
            tapResponse((user: UserCredential) => {
              this.facade.storeUser(user.user);
              user.user.emailVerified &&
                this.router.navigate(['']);
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
              tapResponse((user: UserCredential) => {
                this.facade.storeUser(user.user);

                if (user.user.emailVerified) {
                  this.router.navigate(['']);
                  return;
                }

                this.authService.sendEmailVerification(user.user);
              }, this.handleError)
            )
          )
        )
      )
  );
}
