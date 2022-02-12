import { store } from './store';
import { createStore } from 'redux';

describe('Root store Suite', () => {


  test('loaded correctly', () => {
    expect(store.getState().data).toEqual({ plans:[] });
    expect(store.getState().datafiveg).toEqual( { plansfiveg: [] });
    expect(store.getState().datahomephone).toEqual({ plansHomephone: [] });
  });
});