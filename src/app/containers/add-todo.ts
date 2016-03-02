import { Component } from 'angular2/core';
import { AddTodo } from '../components/add-todo';
import { connect } from '../lib';
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
  ngOnInit() {
    connect(null, mapDispatchToProps)(this);
  }
}
