import { Component } from '@angular/core';
import { TodosFilters } from './todos-filters';
import { TodosCounterContainer } from '../containers/todos-counter';
import { ClearCompletedContainer } from '../containers/clear-completed';

@Component({
  selector: 'app-footer',
  template: `
    <footer id="footer">
      <todos-counter-container></todos-counter-container>
      <todos-filters></todos-filters>
      <clear-completed></clear-completed>
    </footer>
  `,
  directives: [
    TodosCounterContainer,
    TodosFilters,
    ClearCompletedContainer
  ]
})
export class AppFooter {
}
