import { Action } from '@ngrx/store';

import * as SharedStoreActions from './shared-store.actions';
import { SharedStoreEntity } from './shared-store.models';
import {
  SharedStoreState,
  initialSharedStoreState,
  sharedStoreReducer,
} from './shared-store.reducer';

describe('SharedStore Reducer', () => {
  describe('valid SharedStore actions', () => {

    it('should show as loading', () => {
      const action = SharedStoreActions.showLoading();

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.loading).toBe(true);
    });

    it('should not be loading', () => {
      const action = SharedStoreActions.hideLoading()

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.loading).toBe(false);
    });

    it('should toggle sidenavbar', () => {
      const action = SharedStoreActions.toggleSidenavbar()

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.toggleSidenavbar).toBe(false);
    });

    it('should store user info', () => {
      const action = SharedStoreActions.storeUserInfo({ userInfo: { id: 1 } })

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.userInfo).toStrictEqual({ id: 1 });
    });

    it('should store user info after getting a session', () => {
      const action = SharedStoreActions.getSessionSuccess({ userInfo: { id: 1 } })

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.userInfo).toStrictEqual({ id: 1 });
    });

    it('should store the failure of an action', () => {
      const action = SharedStoreActions.actionFailure(
        {
          error: { msj: 'test' },
          message: 'test',
          status: true,
        }
      )

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.error).toStrictEqual(
        {
          status: true,
          message: 'test',
          error: { msj: 'test' }
        }
      );
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
