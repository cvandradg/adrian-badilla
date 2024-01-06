import { Route } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { importProvidersFrom } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '@environments/environment';
import { canActivate } from '@angular/fire/auth-guard';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { AppComponent } from './components/app/app.component';
import { ErrorComponent } from './components/error/error.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { SERVICES } from '@adrianbadilla/shared/exports/export-services';
import * as fromSharedStore from '@adrianbadilla/shared/+state/shared-store.reducer';
import { SharedStoreEffects } from '@adrianbadilla/shared/+state/shared-store.effects';
import {
  redirectLoggedIn,
  redirectUnauthorized,
} from '@adrianbadilla/shared/services/helperFunctions.service';

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
        ...canActivate(redirectLoggedIn),
      },
      {
        path: '',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('@adrianbadilla/dashboard').then((r) => r.dashboardRoutes),
        ...canActivate(redirectUnauthorized),
      },
      {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full',
      },
    ],
  },
];
