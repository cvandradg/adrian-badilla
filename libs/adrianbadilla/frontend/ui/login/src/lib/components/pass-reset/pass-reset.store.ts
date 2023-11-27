import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { ComponentStoreMixinHelper } from '@classes/component-store-helper';

@Injectable()
export class passResetStore extends ComponentStoreMixinHelper<PassResetState> {
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

export interface PassResetState {
  requested: boolean;
}
