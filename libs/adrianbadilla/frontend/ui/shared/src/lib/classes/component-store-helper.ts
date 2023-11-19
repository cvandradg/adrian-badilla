import { Router } from '@angular/router';
import { AppError } from '../types/types';
import { FirebaseError } from 'firebase/app';
import { Directive, inject } from '@angular/core';
import { OperatorFunction, pipe, tap } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';
import { SharedStoreFacade } from '../+state/shared-store.facade';
import { AuthService } from '../services/auth-service.service';
import { ErrorHandlerService } from '../services/error-handler.service';

export interface GenericState extends Object {
  error?: AppError | null;
  loading?: boolean;
}

@Directive()
export class ComponentStoreMixinHelper<
  T extends GenericState
> extends ComponentStore<T> {
  router = inject(Router);
  authService = inject(AuthService);
  facade = inject(SharedStoreFacade);
  errorHelperService = inject(ErrorHandlerService);

  readonly error$ = this.select((state) => state.error);
  readonly loading$ = this.select((state) => state.loading);

  readonly setError = this.updater((state, error: AppError | null) => ({
    ...state,
    loading: false,
    error,
  }));

  readonly setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));

  get handleError() {
    return (error: FirebaseError) => {
      return this.setError(this.errorHelperService.firebaseErrorHandler(error));
    };
  }

  responseHandler(operator: OperatorFunction<any, any>) {
    return pipe(this.onRequest, operator, this.onResponse);
  }

  get onResponse() {
    return tap<any>(() => {
      this.setError(null);
      this.setLoading(false);
    });
  }

  get onRequest() {
    return tap<any>(() => {
      this.setError(null);
      this.setLoading(true);
    });
  }
}
