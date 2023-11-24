import {
  ApplicationConfig,
  importProvidersFrom,
  ErrorHandler,
  isDevMode,
} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandlerService } from '@services/error-handler.service';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideStore(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      EffectsModule.forRoot([]),
      StoreRouterConnectingModule.forRoot({ routerState: RouterState.Full })
    ),
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
    provideStoreDevtools({
      logOnly: !isDevMode(),
      trace: true,
      traceLimit: 70,
    }),
  ],
};
