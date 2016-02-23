import { Component } from 'angular2/core';
import { TodoListContainer } from '../../containers/todo-list';
import { AddTodoContainer } from '../../containers/add-todo';
import { TodosCounterContainer } from '../../containers/todos-counter';

import { FilterLink } from '../../containers/filter-link';
import { FILTERS } from '../../reducers/visibilityFilter';

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
          <input id="toggle-all" type="checkbox">
          <todo-list-container></todo-list-container>
        </section>
        <footer id="footer">
          <todos-counter-container></todos-counter-container>

          <ul id="filters">
            <li>
              <filter-link [filter]="FILTERS.ALL"></filter-link>
            </li>
            <span> </span>
            <li>
              <filter-link [filter]="FILTERS.TODO"></filter-link>
            </li>
            <span> </span>
            <li>
              <filter-link [filter]="FILTERS.DONE"></filter-link>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  `,
  directives: [TodoListContainer, AddTodoContainer, TodosCounterContainer, FilterLink]
})
export class TodoApp {
  public FILTERS = FILTERS;
}
