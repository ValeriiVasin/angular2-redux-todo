import { Component } from 'angular2/core';
import { TodoListContainer } from '../todo-list/todo-list.container';

@Component({
  selector: 'home',
  template: `
    <h3>Home Component</h3>
    <todo-list-container></todo-list-container>
    <button (click)="onAddTodo()">Add todo</button>
  `,
  directives: [TodoListContainer]
})
export class Home {
}
