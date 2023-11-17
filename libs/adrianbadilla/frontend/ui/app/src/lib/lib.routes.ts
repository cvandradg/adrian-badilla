import { Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { environment } from '@environments/environment';

import { getAuth } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AppComponent,
    providers: [
      CommonModule,
      //   SharedModuleModule,
      importProvidersFrom(
        provideAuth(() => getAuth()),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig))
      ),
      {
        provide: FIREBASE_OPTIONS,
        useValue: environment.firebaseConfig,
      },
    ],

    children: [
      //   {
      //     path: '',
      //     pathMatch: 'prefix',
      //     loadChildren: ()=> import('@libs/login').then((r) => r.routes),
      //   },
      //   {
      //     path: '**',
      //     component: ErrorComponent,
      //     pathMatch: 'full',
      //   },
    ],
  },
];
