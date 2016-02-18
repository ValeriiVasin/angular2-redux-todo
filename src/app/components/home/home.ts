import { Component } from 'angular2/core';
import { TodoListContainer } from '../todo-list/todo-list.container';
import { AddTodoContainer } from '../add-todo/add-todo.container';

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
