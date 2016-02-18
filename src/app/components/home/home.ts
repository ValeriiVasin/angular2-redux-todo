import { Component } from 'angular2/core';
import { TodoListContainer } from '../../containers/todo-list';
import { AddTodoContainer } from '../../containers/add-todo';

@Component({
  selector: 'home',
  template: `
    <h3>Home Component</h3>
    <add-todo-container></add-todo-container>
    <todo-list-container></todo-list-container>
  `,
  directives: [TodoListContainer, AddTodoContainer]
})
export class Home {
}
