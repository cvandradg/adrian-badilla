import { Action } from '@ngrx/store';
import { User } from 'firebase/auth';
import * as SharedStoreActions from './shared-store.actions';
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
      const action = SharedStoreActions.hideLoading();

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.loading).toBe(false);
    });

    it('should toggle sidenavbar', () => {
      const action = SharedStoreActions.toggleSidenavbar();

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.toggleSidenavbar).toBe(false);
    });

    it('should store user info', () => {
      const action = SharedStoreActions.storeUser({
        user: { displayName: 'hola' } as User,
      });

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.user).toStrictEqual({ displayName: 'hola' });
    });

    it('should store user info after getting a session', () => {
      const action = SharedStoreActions.getSessionSuccess({
        user: { displayName: 'hola' } as User,
      });

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.user).toStrictEqual({ displayName: 'hola' });
    });

    it('should store the failure of an action', () => {
      const action = SharedStoreActions.actionFailure({
        error: { message: 'test', name: 'test' },
        message: 'test',
        status: true,
      });

      const result: SharedStoreState = sharedStoreReducer(
        initialSharedStoreState,
        action
      );

      expect(result.error).toStrictEqual({
        status: true,
        message: 'test',
        error: { message: 'test', name: 'test' },
      });
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
