import { Action } from '@ngrx/store';

import * as SharedStoreActions from './shared-store.actions';
import { SharedStoreEntity } from './shared-store.models';
import {
  SharedStoreState,
  initialSharedStoreState,
  sharedStoreReducer,
} from './shared-store.reducer';

describe('SharedStore Reducer', () => {
  const createSharedStoreEntity = (
    id: string,
    name = ''
  ): SharedStoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid SharedStore actions', () => {
    it('loadSharedStoreSuccess should return the list of known SharedStore', () => {
      const sharedStore = [
        createSharedStoreEntity('PRODUCT-AAA'),
        createSharedStoreEntity('PRODUCT-zzz'),
      ];
      const action = SharedStoreActions.loadSharedStoreSuccess({ sharedStore });

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = sharedStoreReducer(initialSharedStoreState, action);

      expect(result).toBe(initialSharedStoreState);
    });
  });
});
