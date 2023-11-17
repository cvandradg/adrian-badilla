import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as SharedStoreActions from './shared-store.actions';
import { SharedStoreEffects } from './shared-store.effects';

describe('SharedStoreEffects', () => {
  let actions: Observable<Action>;
  let effects: SharedStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SharedStoreEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SharedStoreEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SharedStoreActions.initSharedStore() });

      const expected = hot('-a-|', {
        a: SharedStoreActions.loadSharedStoreSuccess({ sharedStore: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
