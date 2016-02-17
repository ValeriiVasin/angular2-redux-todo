import { Injectable } from 'angular2/core';
import { createStore } from 'redux';
import { appReducer } from './reducers/app';

// TODO: Inject store without this overhead

@Injectable()
export class Store {
  private _store = createStore(appReducer);

  dispatch(action) {
    this._store.dispatch(action);
  }

  getState() {
    return this._store.getState();
  }

  subscribe(fn) {
    return this._store.subscribe(fn);
  }
}
