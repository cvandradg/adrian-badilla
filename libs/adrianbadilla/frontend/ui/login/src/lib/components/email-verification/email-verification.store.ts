import { OnStoreInit, tapResponse } from '@ngrx/component-store';
import { ActivatedRoute } from '@angular/router';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';

import { Injectable, inject } from '@angular/core';
import { switchMap, from, tap, Observable, pipe, firstValueFrom } from 'rxjs';
import { User, UserCredential } from 'firebase/auth';

@Injectable()
export class EmailVerificationStore
  extends ComponentStoreMixinHelper<Record<string, unknown>>
  implements OnStoreInit
{
  route = inject(ActivatedRoute);

  constructor() {
    super({});
  }

  ngrxOnStoreInit() {
    this.verifyEmail$(this.route.snapshot.queryParamMap.get('oobCode') || '');
  }

  readonly verifyEmail$ = this.effect((oobCode$: Observable<string>) =>
    oobCode$.pipe(
      this.responseHandler(
        switchMap((oobCode) =>
          from(this.authService.verifyEmail(oobCode)).pipe(
            tapResponse(() => this.checkUserEmailVerified$(), this.handleError)
          )
        )
      )
    )
  );

  checkUserEmailVerified$ = this.effect<void>(
    pipe(
      this.responseHandler(
        switchMap(() =>
          this.authService.getUserSession().pipe(tap(this.verifyEmail))
        )
      )
    )
  );

  get verifyEmail() {
    return {
      next: async (user: User | null) => {
        await user?.reload();
        if (user?.emailVerified) {
          firstValueFrom(this.firestore
            .setUser({user: user} as UserCredential))
            .then(() => this.router.navigate(['/dashboard']));
          return;
        }
      },

      error: this.handleError,
    };
  }
}
