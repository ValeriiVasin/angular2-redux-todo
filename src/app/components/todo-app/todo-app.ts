import { Component } from 'angular2/core';
import { TodoListContainer } from '../../containers/todo-list';
import { AddTodoContainer } from '../../containers/add-todo';

import { FilterLink } from '../../containers/filter-link';
import { FILTERS } from '../../reducers/visibilityFilter';

@Component({
  selector: 'home',
  template: `
    <section id="todoapp">
      <div>
        <header class="header">
          <h1>todos</h1>
          <input id="new-todo" placeholder="What needs to be done?" value="">
        </header>
        <section id="main">
          <input id="toggle-all" type="checkbox">
          <todo-list-container></todo-list-container>
        </section>
        <footer id="footer">
          <span id="todo-count">
            <strong>4</strong>
            <span>items</span>
            <span> left</span>
          </span>

          <ul id="filters">
            <li>
              <a href="#/" class="selected">All</a>
            </li>
            <span> </span>
            <li>
              <a href="#/active" class="">Active</a>
            </li>
            <span> </span>
            <li>
              <a href="#/completed" class="">Completed</a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  `,
  directives: [TodoListContainer, AddTodoContainer, FilterLink]
})
export class TodoApp {
  public FILTERS = FILTERS;
}
