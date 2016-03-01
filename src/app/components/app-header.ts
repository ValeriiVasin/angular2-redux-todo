import { Component } from 'angular2/core';
import { AddTodoContainer } from '../containers/add-todo';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>todos</h1>
      <add-todo-container></add-todo-container>
    </header>
  `,
  directives: [
    AddTodoContainer
  ]
})
export class AppHeader {
}
