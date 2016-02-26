import { combineReducers } from 'redux';
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';
import { ui } from './ui';

export const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  ui
});
