import { Component, Inject } from 'angular2/core';
import { AddTodo } from '../components/add-todo';

import { getRemainingTodosCount } from '../reducers/todos';

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
  constuctor(@Inject('connect') connect) {
    connect(mapStateToProps)(this);
  }
}
