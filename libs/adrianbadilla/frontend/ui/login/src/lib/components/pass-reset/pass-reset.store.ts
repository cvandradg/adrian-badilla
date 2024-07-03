import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { ComponentStoreMixinHelper } from '@adrianbadilla/shared/classes/component-store-helper';

@Injectable()
export class passResetStore extends ComponentStoreMixinHelper<{
  requested: boolean;
}> {
  constructor() {
    super({ requested: false });
  }

  readonly requested$ = this.select((state) => state.requested);

  readonly setRequested = this.updater((state, requested: boolean) => ({
    ...state,
    requested: requested,
  }));

  readonly passReset = this.effect((email$: Observable<string>) =>
    email$.pipe(
      this.responseHandler(
        switchMap((email) =>
          this.authService
            .recoverPassword(email)
            .pipe(tapResponse(() => this.setRequested(true), this.handleError))
        )
      )
    )
  );
}
