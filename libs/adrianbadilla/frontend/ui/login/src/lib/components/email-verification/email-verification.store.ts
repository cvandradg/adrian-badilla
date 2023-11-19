import { OnStoreInit } from '@ngrx/component-store';
import { ActivatedRoute } from '@angular/router';
import { ComponentStoreMixinHelper } from '@classes/component-store-helper';

import { Injectable, inject } from '@angular/core';
import { switchMap, from, tap, Observable, pipe } from 'rxjs';

@Injectable()
export class EmailVerificationStore
  extends ComponentStoreMixinHelper<object>
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
            tap({
              next: () => this.checkUserEmailVerified$(),
              error: this.handleError,
            })
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
      next: async (userInfo: any) => {
        await userInfo?.multiFactor?.user.reload();

        if (userInfo?.emailVerified) {
          this.facade.storeUserInfo(userInfo);
          this.router.navigate(['/dashboard']);
          return;
        }
      },

      error: this.handleError,
    };
  }
}
