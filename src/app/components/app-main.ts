import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <section id="main">
      <toggle-all></toggle-all>
      <todo-list-container></todo-list-container>
    </section>
  `
})
export class AppMain {
}
