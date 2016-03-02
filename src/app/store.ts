import { createStore } from 'redux';
import { rootReducer } from './reducers/root';

export default window.devToolsExtension ?
  window.devToolsExtension()(createStore)(rootReducer) :
  createStore(rootReducer);
