import { Component, Inject } from 'angular2/core';
import { AddTodo } from '../components/add-todo';
import { createTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    add: ({ value }) => dispatch(createTodo({ value }))
  };
};

@Component({
  selector: 'add-todo-container',
  template: `
    <add-todo (add)="add($event)"></add-todo>
  `,
  directives: [AddTodo]
})
export class AddTodoContainer {
  constructor(@Inject('connect') connect) {
    connect(null, mapDispatchToProps)(this);
  }
}
