import { Injectable } from '@angular/core';
import { FirebaseError } from 'firebase/app';
import { UserCredential } from 'firebase/auth';
import { tapResponse } from '@ngrx/component-store';
import { Credentials } from '@adrianbadilla/shared/types/general-types';
import { Observable, switchMap, pipe, concatMap, from, map, tap } from 'rxjs';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';

@Injectable()
export class LoginStore extends ComponentStoreMixinHelper<
  Record<string, unknown>
> {
  constructor() {
    super({});
  }

  readonly onSigninError$ = this.effect<void>(
    pipe(this.responseHandler(tap(() => this.authService.deleteCurrentUser())))
  );

  readonly googleSignin$ = this.effect<void>(
    pipe(
      this.responseHandler(
        switchMap(() =>
          this.authService.googleSignin().pipe(
            concatMap((user: UserCredential) => this.firestore.setUser(user)),
            tapResponse(
              () => this.router.navigate(['dashboard']),
              (error: FirebaseError) => {
                this.onSigninError$();
                this.handleError(error);
              }
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
              tapResponse(
                (user: UserCredential) => {
                  from(this.firestore.setUser(user)).pipe(
                    map(() => {
                      if (user.user.emailVerified) {
                        this.router.navigate(['dashboard']);
                        return;
                      }
                      this.authService.sendEmailVerification(user.user);
                    })
                  );
                },
                (error: FirebaseError) => this.handleError(error)
              )
            )
          )
        )
      )
  );
}
