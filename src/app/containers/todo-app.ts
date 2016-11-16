import { Component } from '@angular/core';
import { connect } from '../lib';

const mapStateToProps = (state) => {
  return {
    hasTodos: state.todos.length > 0
  };
};

@Component({
  selector: 'todo-app',
  template: `
    <section id="todoapp">
      <app-header></app-header>
      <app-main *ngIf="hasTodos"></app-main>
      <app-footer *ngIf="hasTodos"></app-footer>
    </section>
  `
})
export class TodoApp {
  ngOnInit() {
    connect(mapStateToProps)(this);
  }
}
