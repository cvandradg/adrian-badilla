import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { } from 'rxjs/testing';  // Import 'marbles' from 'rxjs-marbles/jest'

import { Observable, from, of } from 'rxjs';
import * as SharedStoreActions from './shared-store.actions';
import { SharedStoreEffects } from './shared-store.effects';
import { Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { FirebaseError } from 'firebase/app';

@Injectable({
    providedIn: null,
})
export class AuthServiceMockService {
    getUserSession() {
        return of({
            multiFactor: {
                user: {
                    name: 'test',
                },
            }

        })
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
        const mockResponse = {
            multiFactor: {
                user: {
                    name: 'test',
                },
            }
        }
        it('should work', () => {
            actions = hot('-a-|', { a: SharedStoreActions.getSession() });

            const expected = cold('-b-|', { b: SharedStoreActions.storeUserInfo({ userInfo: mockResponse.multiFactor.user }) });

            expect(effects.getSession$).toBeObservable(expected);
        });
    });
});