import { combineReducers } from 'redux';
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';
import { ui } from './ui';

export const appReducer = combineReducers({
  todos,
  visibilityFilter,
  ui
});
