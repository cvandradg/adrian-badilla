import { Directive, Injectable, inject } from '@angular/core';
import { AppError } from '../types/general-types';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

export interface GenericState extends Record<string, unknown> {
  error?: AppError | null;
  loading?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SharedStoreFacadeTest {
  user$ = of({ user: { emailVerified: true } });

  error$ = of({ status: 404, message: 'error', error: 'error' });
  loading$ = of(false);

  showSidenavbar$ = of(true);
}

@Directive()
export class ComponentStoreMixinHelper<
  T extends GenericState
> extends ComponentStore<T> {
  router = inject(Router);
  facade = inject(SharedStoreFacadeTest);

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
  extends ComponentStoreMixinHelper<Record<string, unknown>>
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
  facade = inject(SharedStoreFacadeTest);
}
