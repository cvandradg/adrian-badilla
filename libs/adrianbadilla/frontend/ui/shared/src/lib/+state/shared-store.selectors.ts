import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SHARED_STORE_FEATURE_KEY,
  SharedStoreState,
} from './shared-store.reducer';

export const selectSharedStoreState = createFeatureSelector<SharedStoreState>(
  SHARED_STORE_FEATURE_KEY
);

export const error = createSelector(
  selectSharedStoreState,
  (state: SharedStoreState) => state.error
);

export const loading = createSelector(
  selectSharedStoreState,
  (state: SharedStoreState) => state.loading
);

export const user = createSelector(
  selectSharedStoreState,
  (state: SharedStoreState) => state.user
);

export const toogleSidenavbar = createSelector(
  selectSharedStoreState,
  (state: SharedStoreState) => state.toggleSidenavbar
);

export const selectFeature = (state: SharedStoreState) => state.loading;
