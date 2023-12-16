import { Route } from '@angular/router';
import { children } from "./lib.routes";
import { EffectsModule } from '@ngrx/effects';
import { importProvidersFrom } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '@environments/environment';
import { canActivate } from '@angular/fire/auth-guard';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { AppComponent } from './components/app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { SERVICES } from '@adrianbadilla/shared/exports/export-services';
import * as fromSharedStore from '@adrianbadilla/shared/+state/shared-store.reducer';
import { SharedStoreEffects } from '@adrianbadilla/shared/+state/shared-store.effects';
import { redirectUnauthorized } from '@adrianbadilla/shared/services/helperFunctions.service';
import { ErrorComponent } from './components/error/error.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AppComponent,
    providers: [
      MODULES,
      SERVICES,
      StoreRootModule,
      importProvidersFrom(
        EffectsModule.forFeature(SharedStoreEffects),
        StoreModule.forFeature(
          fromSharedStore.SHARED_STORE_FEATURE_KEY,
          fromSharedStore.sharedStoreReducer
        ),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth())
      ),
      {
        provide: FIREBASE_OPTIONS,
        useValue: environment.firebaseConfig,
      },
    ],
    children: [
      {
          path: 'login',
          loadChildren: () =>
              import('@adrianbadilla/login').then((r) => r.loginRoutes),
      },
      {
          path: '',
          pathMatch: 'prefix',
          ...canActivate(redirectUnauthorized),
          loadChildren: () =>
              import('@adrianbadilla/dashboard').then((r) => r.dashboardRoutes),
      },
      {
          path: '**',
          component: ErrorComponent,
          pathMatch: 'full',
      },
  ]
  },
];
