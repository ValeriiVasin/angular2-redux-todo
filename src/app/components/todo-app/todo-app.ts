import { Component } from 'angular2/core';
import { TodoListContainer } from '../../containers/todo-list';
import { AddTodoContainer } from '../../containers/add-todo';

import { FilterLink } from '../../containers/filter-link';
import { FILTERS } from '../../reducers/visibilityFilter';

@Component({
  selector: 'home',
  template: `
    <section id="todoapp">
      <div data-reactid=".0">
        <header class="header">
          <h1>todos</h1>
          <input id="new-todo" placeholder="What needs to be done?" value="">
        </header>
        <section id="main">
          <input id="toggle-all" type="checkbox">
          <ul id="todo-list">
            <li>
              <div class="view">
                <input class="toggle" type="checkbox">
                <label>asdfasf</label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="asdfasf">
            </li>
          </ul>
        </section>
        <footer id="footer">
          <span id="todo-count">
            <strong>4</strong>
            <span></span>
            <span>items</span>
            <span> left</span>
          </span>

          <ul id="filters">
            <li>
              <a href="#/" class="selected">All</a>
            </li>
            <span data-reactid=".0.2.1.1"> </span>
            <li data-reactid=".0.2.1.2">
              <a href="#/active" class="">Active</a>
            </li>
            <span data-reactid=".0.2.1.3"> </span>
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
