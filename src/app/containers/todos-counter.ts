import { Component } from 'angular2/core';
import { Store } from '../store';
import { AddTodo } from '../components/add-todo/add-todo';

import { getRemainingTodosCount } from '../reducers/todos';
import { connect } from '../lib';

const mapStateToProps = (state) => {
  return {
    counter: getRemainingTodosCount(state.todos)
  };
};

@Component({
  selector: 'todos-counter-container',
  template: `
    <span id="todo-count">
      <strong>{{counter}}</strong> items left
    </span>
  `,
  directives: [AddTodo]
})
export class TodosCounterContainer {
  constructor(private store: Store) {}

  ngOnInit() {
    connect({ component: this, mapStateToProps, store: this.store });
  }
}
