import { Component, Inject } from 'angular2/core';
import { clearCompletedTodos } from '../actions';

const getCompletedTodosCount = (todos) => {
  return todos.reduce((total, todo) => {
    return todo.isDone ? total + 1 : total;
  }, 0);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClicked: () => dispatch(clearCompletedTodos())
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
  constructor(@Inject('connect') connect) {
    connect(mapStateToProps, mapDispatchToProps)(this);
  }
}
