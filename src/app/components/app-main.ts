import { Component } from 'angular2/core';
import { TodoListContainer } from '../containers/todo-list';
import { ToggleAllContainer } from '../containers/toggle-all';

@Component({
  selector: 'app-main',
  template: `
    <section id="main">
      <toggle-all></toggle-all>
      <todo-list-container></todo-list-container>
    </section>
  `,
  directives: [
    TodoListContainer
  ]
})
export class AppMain {
}
