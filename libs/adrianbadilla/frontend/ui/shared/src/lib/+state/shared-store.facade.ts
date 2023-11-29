import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as actions from './shared-store.actions';
import * as selectors from './shared-store.selectors';
import { Credentials, generalError } from '../types/types';
import { User } from 'firebase/auth';

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

  storeUser(user: User) {
    this.store.dispatch(actions.storeUser({ user }));
  }

  setError({ status, message, error }: generalError) {
    this.store.dispatch(actions.actionFailure({ status, message, error }));
  }

  error$ = this.store.pipe(select(selectors.error));
  loading$ = this.store.pipe(select(selectors.loading));
  userInfo$ = this.store.pipe(select(selectors.userInfo));
  showSidenavbar$ = this.store.pipe(select(selectors.toogleSidenavbar));
}
