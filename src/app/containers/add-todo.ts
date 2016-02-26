import { Component } from 'angular2/core';
import { Store } from '../store';
import { AddTodo } from '../components/add-todo';
import { connect } from '../lib';

const mapDispatchToProps = (dispatch) => {
  return {
    add({ value }) {
      dispatch({ type: 'CREATE_TODO', value });
    }
  }
};

@Component({
  selector: 'add-todo-container',
  template: `
    <add-todo (add)="add($event)"></add-todo>
  `,
  directives: [AddTodo]
})
export class AddTodoContainer {
  constructor(private store: Store) {}

  ngOnInit() {
    connect({ mapDispatchToProps, component: this, store: this.store });
  }
}
