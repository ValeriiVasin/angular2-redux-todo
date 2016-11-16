import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>todos</h1>
      <add-todo-container></add-todo-container>
    </header>
  `,
})
export class AppHeader {
}
