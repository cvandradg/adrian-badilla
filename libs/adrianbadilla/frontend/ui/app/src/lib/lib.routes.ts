import { Route } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SharedStoreEffects } from '@adrianbadilla/shared/+state/shared-store.effects';
import * as fromSharedStore from '@adrianbadilla/shared/+state/shared-store.reducer';

import { getAuth } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { ErrorComponent } from './components/error/error.component';
import { SharedStoreFacade } from '@adrianbadilla/shared/+state/shared-store.facade';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AppComponent,
    providers: [
      CommonModule,
      SharedStoreFacade,
      
      importProvidersFrom(
        FontAwesomeModule,
        // EffectsModule.forFeature([SharedStoreEffects]),
        StoreModule.forFeature(
          fromSharedStore.SHARED_STORE_FEATURE_KEY,
          fromSharedStore.sharedStoreReducer
        ),
        provideAuth(() => getAuth()),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig))
      ),
      {
        provide: FIREBASE_OPTIONS,
        useValue: environment.firebaseConfig,
      },
    ],

    children: [
      {
        path: '',
        pathMatch: 'prefix',
        loadChildren: () => import('@adrianbadilla/login').then((r) => r.loginRoutes),
      },
      {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full',
      },
    ],
  },
];
