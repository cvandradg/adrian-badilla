import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType, OnInitEffects } from '@ngrx/effects';
import {
  switchMap,
  catchError,
  map,
  Observable,
  startWith,
  filter,
  concatMap,
} from 'rxjs';
import * as actions from './shared-store.actions';
import { AuthService } from '../services/auth-service.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { NothingOr, deepCopy } from '../types/general-types';
import { User } from 'firebase/auth';
import { Action } from '@ngrx/store/src/models';
import { FirebaseError } from 'firebase/app';
import { createAction } from '@ngrx/store';

@Injectable()
export class SharedStoreEffects implements OnInitEffects {
  private auth = inject(AuthService);
  private actions = inject(Actions);
  private errorHelperService = inject(ErrorHandlerService);

  ngrxOnInitEffects() {
    return actions.getSession();
  }

  getSession$ = createEffect(() =>
    this.actions.pipe(
      ofType(actions.getSession),
      concatMap(() => this.auth.authState$),
      map((user: NothingOr<User>) => {
        user = deepCopy(user);
        return actions.storeUser({ user });
      }),
      catchSwitchMapError((error) =>
        actions.actionFailure(
          this.errorHelperService.firebaseErrorHandler(error)
        )
      )
    )
  );

  passReset$ = createEffect(() =>
    this.actions.pipe(
      ofType(actions.requestPassReset),
      switchMap((action) => this.auth.recoverPassword(action.email)),
      map(() => createAction('')),
      catchSwitchMapError((error: FirebaseError) => {
        return actions.actionFailure(
          this.errorHelperService.firebaseErrorHandler(error)
        );
      })
    )
  );

  hideLoading$ = createEffect(() =>
    this.actions.pipe(
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
          action.type === actions.storeUser.type
        )
          return actions.hideLoading();

        return actions.showLoading();
      })
    )
  );

  signOut$ = createEffect(() =>
    this.actions.pipe(
      ofType(actions.signOut),
      switchMap(() => this.auth.signOut()),
      map(() => actions.storeUser({ user: null })),
      catchSwitchMapError((error) =>
        actions.actionFailure(
          this.errorHelperService.firebaseErrorHandler(error)
        )
      )
    )
  );
}

export const catchSwitchMapError =
  (
    errorAction: (
      error: FirebaseError
    ) => Action<'[SharedStore Page] On Action Failure'>
  ) =>
  <T>(source: Observable<T>) =>
    source.pipe(
      catchError((error, innerSource) =>
        innerSource.pipe(startWith(errorAction(error)))
      )
    );
