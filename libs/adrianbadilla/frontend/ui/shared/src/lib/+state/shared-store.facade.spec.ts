import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedStoreFacade } from './shared-store.facade';
import {
  SHARED_STORE_FEATURE_KEY,
  sharedStoreReducer,
} from './shared-store.reducer';
import { firstValueFrom } from 'rxjs';

describe('SharedStoreFacade', () => {
  let facade: SharedStoreFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SHARED_STORE_FEATURE_KEY, sharedStoreReducer),
        ],
        providers: [SharedStoreFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}

      TestBed.configureTestingModule({
        imports: [RootModule],
        providers: [SharedStoreFacade],
      });

      facade = TestBed.inject(SharedStoreFacade);
    });

    it('should start to load', async () => {
      facade.showLoader();
      const loading = await firstValueFrom(facade.loading$);
      expect(loading).toBe(true);
    });

    it('should hide the load', async () => {
      facade.hideLoader();
      const loading = await firstValueFrom(facade.loading$);
      expect(loading).toBe(false);
    });

    it('should toggle side bar', async () => {
      facade.toggleSidenavbar();
      const toogle = await firstValueFrom(facade.showSidenavbar$);
      expect(toogle).toBe(false);
    });

    it('should set an error', async () => {
      facade.setError({
        status: true,
        message: 'error',
        error: { name: 'error', message: 'error' },
      });

      const error = await firstValueFrom(facade.error$);

      expect(error).toStrictEqual({
        status: true,
        message: 'error',
        error: { name: 'error', message: 'error' },
      });
    });
  });
});
