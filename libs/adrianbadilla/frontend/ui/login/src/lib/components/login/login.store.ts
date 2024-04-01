import { Injectable } from '@angular/core';
import { UserCredential } from 'firebase/auth';
import { tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, pipe, concatMap, from } from 'rxjs';
import { Credentials } from '@adrianbadilla/shared/types/general-types';
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
            concatMap((user: UserCredential) =>
              from(this.firestore.setUser(user.user))
            ),
            tapResponse(
              () => this.router.navigate(['dashboard']),
              this.handleError
            )
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
                this.firestore.setUser(user.user).then(() => {
                  if (user.user.emailVerified) {
                    this.router.navigate(['dashboard']);
                    return;
                  }
                  this.authService.sendEmailVerification(user.user);
                });
              }, this.handleError)
            )
          )
        )
      )
  );
}
