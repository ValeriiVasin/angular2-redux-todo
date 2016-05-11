import { Component } from '@angular/core';
import { AddTodo } from '../components/add-todo';

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
  ngOnInit() {
    connect(mapStateToProps)(this);
  }
}
