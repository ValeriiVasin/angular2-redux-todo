import { Injectable } from 'angular2/core';
import { createStore } from 'redux';
import { rootReducer } from './reducers/root';

// TODO: Inject store without this overhead

@Injectable()
export class Store {
  private _store = window.devToolsExtension ?
    window.devToolsExtension()(createStore)(rootReducer) :
    createStore(rootReducer);

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
