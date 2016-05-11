import { Component } from '@angular/core';
import { connect } from '../lib';
import { clearCompletedTodos } from '../actions';

const getCompletedTodosCount = (todos) => {
  return todos.reduce((total, todo) => {
    return todo.isDone ? total + 1 : total;
  }, 0);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClicked: () => dispatch(clearCompletedTodos())
  };
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
  ngOnInit() {
    connect(mapStateToProps, mapDispatchToProps)(this);
  }
}
