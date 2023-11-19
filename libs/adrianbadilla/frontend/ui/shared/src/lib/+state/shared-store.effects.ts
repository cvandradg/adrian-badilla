import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType, OnInitEffects } from '@ngrx/effects';
import {
  switchMap,
  catchError,
  map,
  Observable,
  startWith,
  filter,
} from 'rxjs';
import * as actions from './shared-store.actions';
import { AuthService } from '../services/auth-service.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { deepCopy } from '../types/types';

@Injectable()
export class SharedStoreEffects implements OnInitEffects {
  private auth = inject(AuthService);
  private actions$ = inject(Actions);
  private errorHelperService = inject(ErrorHandlerService);

  ngrxOnInitEffects() {
    return actions.getSession();
  }

  getSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getSession),
      switchMap(() => this.auth.getUserSession()),
      map((response: any) => {
        const userInfo = deepCopy(response?.multiFactor.user);

        return actions.storeUserInfo({ userInfo });
      }),
      catchSwitchMapError((error) =>
        actions.actionFailure(
          this.errorHelperService.firebaseErrorHandler(error)
        )
      )
    )
  );

  passReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.requestPassReset),
      switchMap((action) => this.auth.recoverPassword(action.email)),
      catchSwitchMapError((error) => {
        if (
          error.code !== 'auth/missing-email' &&
          error.code !== 'auth/invalid-email'
        )
          return;

        return actions.actionFailure(
          this.errorHelperService.firebaseErrorHandler(error)
        );
      })
    )
  );

  hideLoading$ = createEffect(() =>
    this.actions$.pipe(
      filter((action) => {
        const validAction = Object.values(actions).some(
          (ObjAction) => ObjAction.type === action.type
        );

        const unWantedToListen =
          action.type !== actions.showLoading.type &&
          action.type !== actions.hideLoading.type;

        return validAction && unWantedToListen;
      }),
      map((action) => {
        if (
          action.type === actions.actionFailure.type ||
          action.type === actions.storeUserInfo.type
        )
          return actions.hideLoading();

        return actions.showLoading();
      })
    )
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.signOut),
      switchMap(() => this.auth.signOut()),
      map(() => actions.storeUserInfo({ userInfo: null })),
      catchSwitchMapError((error) =>
        actions.actionFailure(
          this.errorHelperService.firebaseErrorHandler(error)
        )
      )
    )
  );
}

export const catchSwitchMapError =
  (errorAction: (error: any) => any) =>
  <T>(source: Observable<T>) =>
    source.pipe(
      catchError((error, innerSource) =>
        innerSource.pipe(startWith(errorAction(error)))
      )
    );
