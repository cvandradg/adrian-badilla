import { ActivatedRoute } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { OnStoreInit, tapResponse } from '@ngrx/component-store';
import { ComponentStoreMixinHelper } from '@classes/component-store-helper';
import { Observable, switchMap, withLatestFrom } from 'rxjs';

@Injectable()
export class RequestPassResetStore
  extends ComponentStoreMixinHelper<{
    reseted: boolean;
    code: string;
  }>
  implements OnStoreInit
{
  route = inject(ActivatedRoute);

  constructor() {
    super({ reseted: false, code: '' });
  }

  ngrxOnStoreInit() {
    this.setCode(this.route.snapshot.queryParamMap.get('oobCode') || '');
  }

  readonly code$ = this.select((state) => state.code);
  readonly reseted$ = this.select((state) => state.reseted);

  readonly setReseted = this.updater((state, reseted: boolean) => ({
    ...state,
    reseted,
  }));

  readonly setCode = this.updater((state, code: string) => ({
    ...state,
    code,
  }));

  readonly passReset$ = this.effect((pass$: Observable<{ pass: string }>) =>
    pass$.pipe(
      withLatestFrom(this.code$),
      this.responseHandler(
        switchMap(([{ pass }, oobCode]) =>
          this.authService.resetPass(oobCode, pass).pipe(
            tapResponse(() => {
              this.setReseted(true);
              this.facade.signOut();
            }, this.handleError)
          )
        )
      )
    )
  );
}
