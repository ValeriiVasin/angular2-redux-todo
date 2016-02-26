import { Component } from 'angular2/core';
import { TodosFilters } from './todos-filters';
import { TodoListContainer } from '../containers/todo-list';
import { AddTodoContainer } from '../containers/add-todo';
import { TodosCounterContainer } from '../containers/todos-counter';
import { ClearCompletedContainer } from '../containers/clear-completed';
import { ToggleAllContainer } from '../containers/toggle-all';

@Component({
  selector: 'home',
  template: `
    <section id="todoapp">
      <div>
        <header class="header">
          <h1>todos</h1>
          <add-todo-container></add-todo-container>
        </header>
        <section id="main">
          <toggle-all></toggle-all>
          <todo-list-container></todo-list-container>
        </section>
        <footer id="footer">
          <todos-counter-container></todos-counter-container>
          <todos-filters></todos-filters>
          <clear-completed></clear-completed>
        </footer>
      </div>
    </section>
  `,
  directives: [
    TodoListContainer,
    ToggleAllContainer,
    AddTodoContainer,
    TodosCounterContainer,
    TodosFilters,
    ClearCompletedContainer
  ]
})
export class TodoApp {}
