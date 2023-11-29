import { Directive, Injectable, inject } from '@angular/core';
import { AppError } from '../types/types';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

export interface GenericState extends Object {
  error?: AppError | null;
  loading?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SharedStoreFacade {
  userInfo$ = of({ user: { emailVerified: true } });

  error$ = of({ status: 404, message: 'error', error: 'error' });
  loading$ = of(false);

  showSidenavbar$ = of(true);
}

@Directive()
export class ComponentStoreMixinHelper<
  T extends GenericState
> extends ComponentStore<T> {
  router = inject(Router);
  facade = inject(SharedStoreFacade);

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
}

@Injectable()
export class MockComponentStore
  extends ComponentStoreMixinHelper<object>
  implements OnStoreInit
{
  constructor() {
    super({});
  }

  ngrxOnStoreInit() {
    return;
  }
}

@Directive()
export class BaseComponent {
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  facade = inject(SharedStoreFacade);
}
