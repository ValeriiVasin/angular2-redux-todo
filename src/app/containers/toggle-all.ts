import { Component, Input } from 'angular2/core';
import { connect } from '../lib';
import { Store } from '../store';
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

  constructor(private store: Store) {}

  ngOnInit() {
    connect({ component: this, store: this.store, mapStateToProps, mapDispatchToProps });
  }
}
