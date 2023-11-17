import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as SharedStoreActions from './shared-store.actions';
import { SharedStoreEffects } from './shared-store.effects';
import { SharedStoreFacade } from './shared-store.facade';
import { SharedStoreEntity } from './shared-store.models';
import {
  SHARED_STORE_FEATURE_KEY,
  SharedStoreState,
  initialSharedStoreState,
  sharedStoreReducer,
} from './shared-store.reducer';
import * as SharedStoreSelectors from './shared-store.selectors';

interface TestSchema {
  sharedStore: SharedStoreState;
}

describe('SharedStoreFacade', () => {
  let facade: SharedStoreFacade;
  let store: Store<TestSchema>;
  const createSharedStoreEntity = (
    id: string,
    name = ''
  ): SharedStoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SHARED_STORE_FEATURE_KEY, sharedStoreReducer),
          EffectsModule.forFeature([SharedStoreEffects]),
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
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(SharedStoreFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allSharedStore$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allSharedStore$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadSharedStoreSuccess` to manually update list
     */
    it('allSharedStore$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allSharedStore$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        SharedStoreActions.loadSharedStoreSuccess({
          sharedStore: [
            createSharedStoreEntity('AAA'),
            createSharedStoreEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allSharedStore$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
