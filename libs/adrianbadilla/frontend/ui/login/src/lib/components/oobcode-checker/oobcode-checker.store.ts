import { OnStoreInit } from '@ngrx/component-store';
import { ActivatedRoute } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { ComponentStoreMixinHelper } from '@classes/component-store-helper';
import { switchMap, tap, Observable } from 'rxjs';

@Injectable()
export class OobcodeCheckerStore
  extends ComponentStoreMixinHelper<object>
  implements OnStoreInit
{
  route = inject(ActivatedRoute);

  constructor() {
    super({});
  }

  ngrxOnStoreInit() {
    this.checkCode$(this.route.snapshot.queryParamMap.get('oobCode') || '');
  }

  readonly checkCode$ = this.effect((oobCode$: Observable<string>) => {
    return oobCode$.pipe(
      this.responseHandler(
        switchMap((oobCode) =>
          this.authService.checkOobCode(oobCode).pipe(tap(this.oobCodeCheck))
        )
      )
    );
  });

  get oobCodeCheck() {
    return {
      next: (res: any) => {
        switch (res.operation) {
          case 'VERIFY_EMAIL':
            this.router.navigate(['/email-verification'], {
              queryParamsHandling: 'preserve',
            });
            break;

          case 'PASSWORD_RESET':
            this.router.navigate(['/passReset'], {
              queryParamsHandling: 'preserve',
            });
            break;
        }
      },
      error: this.handleError,
    };
  }
}
