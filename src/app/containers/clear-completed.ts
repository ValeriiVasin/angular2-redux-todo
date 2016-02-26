import { Component } from 'angular2/core';
import { Store } from '../store';
import { connect } from '../lib';

const getCompletedTodosCount = (todos) => {
  return todos.reduce((total, todo) => {
    return todo.isDone ? total + 1 : total;
  }, 0)
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClicked() {
      dispatch({ type: 'CLEAR_COMPLETED_TODOS' });
    }
  }
};

const mapStateToProps = (state) => {
  return {
    hasCompleted: getCompletedTodosCount(state.todos) !== 0
  };
};

@Component({
  selector: 'clear-completed',
  template: `
    <button
      id="clear-completed"
      *ngIf="hasCompleted"
      (click)="onButtonClicked()"
      >Clear completed</button>
  `
})
export class ClearCompletedContainer {
  constructor(private store: Store) {}

  ngOnInit() {
    connect({ mapDispatchToProps, mapStateToProps, component: this, store: this.store });
  }
}
