import {
  SharedStorePartialState,
  initialSharedStoreState,
} from './shared-store.reducer';
import * as SharedStoreSelectors from './shared-store.selectors';

describe('SharedStore Selectors', () => {
  let state: SharedStorePartialState;

  beforeEach(() => {
    state = { sharedStore: initialSharedStoreState };
  });

  describe('SharedStore Selectors', () => {
    it('should return the current "loaded" status', () => {
      const result = SharedStoreSelectors.loading(state);

      expect(result).toBe(false);
    });

    it('should return the current "error" state', () => {
      const result = SharedStoreSelectors.error(state);

      expect(result).toStrictEqual({
        status: false,
        message: '',
        error: {} as Error,
      });
    });

    it('should return the current "user info" state', () => {
      const result = SharedStoreSelectors.user(state);

      expect(result).toBe(null);
    });

    it('should return the current "user info" state', () => {
      const result = SharedStoreSelectors.user(state);

      expect(result).toBe(null);
    });

    it('should return the current "toggle" state', () => {
      const result = SharedStoreSelectors.toogleSidenavbar(state);

      expect(result).toBe(true);
    });
  });
});
