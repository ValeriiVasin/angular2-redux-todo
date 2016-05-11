import { Component } from '@angular/core';

import { FilterLink } from '../containers/filter-link';
import { FILTERS } from '../reducers/visibilityFilter';

@Component({
  selector: 'todos-filters',
  template: `
    <ul id="filters">
      <li><filter-link [filter]="FILTERS.ALL"></filter-link></li>
      <li><filter-link [filter]="FILTERS.TODO"></filter-link></li>
      <li><filter-link [filter]="FILTERS.DONE"></filter-link></li>
    </ul>
  `,
  directives: [FilterLink]
})
export class TodosFilters {
  public FILTERS = FILTERS;
};
