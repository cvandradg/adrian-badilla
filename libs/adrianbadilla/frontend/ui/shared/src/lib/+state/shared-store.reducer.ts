import { User } from 'firebase/auth';
import { AppError, NothingOr } from '../types/general-types';
import { createReducer, on, Action } from '@ngrx/store';
import * as SharedStoreActions from './shared-store.actions';
import { SharedStoreEntity } from '../+state/shared-store.models';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const SHARED_STORE_FEATURE_KEY = 'sharedStore';

export interface SharedStoreState {
  user: NothingOr<User>;
  loading: boolean;
  toggleSidenavbar: boolean;
  error: AppError;
}

export const initialSharedStoreState: SharedStoreState = {
  user: null,
  loading: false,
  toggleSidenavbar: true,
  error: { status: false, message: '', error: {} as Error },
};

export interface SharedStorePartialState {
  readonly [SHARED_STORE_FEATURE_KEY]: SharedStoreState;
}

export const sharedStoreAdapter: EntityAdapter<SharedStoreEntity> =
  createEntityAdapter<SharedStoreEntity>();

export const reducer = createReducer(
  initialSharedStoreState,
  on(SharedStoreActions.showLoading, (state) => ({
    ...state,
    loading: true,
  })),
  on(SharedStoreActions.hideLoading, (state) => ({
    ...state,
    loading: false,
  })),
  on(SharedStoreActions.toggleSidenavbar, (state) => ({
    ...state,
    toggleSidenavbar: !state.toggleSidenavbar,
  })),

  on(SharedStoreActions.actionFailure, (state, { error, message, status }) => ({
    ...state,
    loading: false,
    error: { error, message, status },
  })),
  on(
    SharedStoreActions.storeUser,
    SharedStoreActions.getSessionSuccess,
    (state, { user }) => ({
      ...state,
      user,
    })
  )
);

export function sharedStoreReducer(state: SharedStoreState, action: Action) {
  return reducer(state, action);
}
