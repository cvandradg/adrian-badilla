import { Action } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { FirebaseError } from 'firebase/app';
import { SharedStoreEffects } from './shared-store.effects';
import * as SharedStoreActions from './shared-store.actions';
import { AuthService } from '../services/auth-service.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: null,
})
export class AuthServiceMockService {
  get authState$() {
    return of({
      user: { name: 'test' },
    });
  }
}

@Injectable({
  providedIn: null,
})
export class ErrorHandlerMockService {
  firebaseErrorHandler(error: FirebaseError) {
    return error;
  }
}

describe('SharedStoreEffects', () => {
  let actions: Observable<Action>;
  let effects: SharedStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockActions(() => actions),
        provideMockStore(),
        SharedStoreEffects,
        { provide: AuthService, useClass: AuthServiceMockService },
        { provide: ErrorHandlerService, useClass: ErrorHandlerMockService },
      ],
    });

    effects = TestBed.inject(SharedStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getSession$', () => {
    const user: User = {
      displayName: 'test',
    } as User;
    it('should work', () => {
      actions = hot('-a-|', { a: SharedStoreActions.getSession() });

      const expected = cold('-b-|', {
        b: SharedStoreActions.storeUser({ user }),
      });

      expect(effects.getSession$).toBeObservable(expected);
    });
  });
});
