import { rootReducer } from './rootReducer';
import { createStore } from 'redux';

describe('Root Reducer Suite', () => {

  let store = createStore(rootReducer)

  test('loaded correctly', () => {
    expect(store.getState().data).toEqual({ plans:[] });
    expect(store.getState().datafiveg).toEqual( { plansfiveg: [] });
    expect(store.getState().datahomephone).toEqual({ plansHomephone: [] });
  });
});