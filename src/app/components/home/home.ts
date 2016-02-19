import { Component } from 'angular2/core';
import { TodoListContainer } from '../../containers/todo-list';
import { AddTodoContainer } from '../../containers/add-todo';

import { FilterLink } from '../../containers/filter-link';
import { FILTERS } from '../../reducers/visibilityFilter';

@Component({
  selector: 'home',
  template: `
    <h3>Home Component</h3>
    <add-todo-container></add-todo-container>
    <todo-list-container></todo-list-container>
    <p>
      <filter-link [filter]="FILTERS.ALL"></filter-link>
      <filter-link [filter]="FILTERS.DONE"></filter-link>
      <filter-link [filter]="FILTERS.TODO"></filter-link>
    </p>
  `,
  directives: [TodoListContainer, AddTodoContainer, FilterLink]
})
export class Home {
  public FILTERS = FILTERS;
}
