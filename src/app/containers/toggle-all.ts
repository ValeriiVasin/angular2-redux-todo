import { Component, Input, Inject } from 'angular2/core';
import { toggleAllTodos } from '../actions';

const mapStateToProps = (state) => {
  const isActive = state.todos.filter(todo => !todo.isDone).length === 0;

  return {
    isActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleAll: () => dispatch(toggleAllTodos())
  };
};

@Component({
  selector: 'toggle-all',
  template: `
    <input
      id="toggle-all"
      type="checkbox"
      [checked]="isActive"
      (change)="onToggleAll()"
      />
  `
})
export class ToggleAllContainer {
  @Input() isActive: boolean = false;

  constructor(@Inject('connect') connect) {
    connect(mapStateToProps, mapDispatchToProps)(this);
  }
}
