import { User } from 'firebase/auth';
import { select, Store } from '@ngrx/store';

import * as actions from './shared-store.actions';
import { Injectable, inject } from '@angular/core';
import * as selectors from './shared-store.selectors';
import { AppError, Credentials, deepCopy } from '../types/general-types';

@Injectable({
  providedIn: 'root',
})
export class SharedStoreFacade {
  private readonly store = inject(Store);

  signOut() {
    this.store.dispatch(actions.signOut());
  }

  getSession() {
    this.store.dispatch(actions.getSession());
  }

  showLoader() {
    this.store.dispatch(actions.showLoading());
  }

  hideLoader() {
    this.store.dispatch(actions.hideLoading());
  }

  toggleSidenavbar() {
    this.store.dispatch(actions.toggleSidenavbar());
  }

  accessAccount(credentials: Credentials) {
    this.store.dispatch(actions.accessAccount(credentials));
  }

  requestPassReset(email: string) {
    this.store.dispatch(actions.requestPassReset({ email }));
  }

  setError({ status, message, error }: AppError) {
    this.store.dispatch(actions.actionFailure({ status, message, error }));
  }

  storeUser(user: User) {
    user = deepCopy(user);
    this.store.dispatch(actions.storeUser({ user }));
  }

  user$ = this.store.pipe(select(selectors.user));
  error$ = this.store.pipe(select(selectors.error));
  loading$ = this.store.pipe(select(selectors.loading));
  showSidenavbar$ = this.store.pipe(select(selectors.toogleSidenavbar));
}
