import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer id="footer">
      <todos-counter-container></todos-counter-container>
      <todos-filters></todos-filters>
      <clear-completed></clear-completed>
    </footer>
  `,
})
export class AppFooter {
}
