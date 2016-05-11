import { Component } from 'angular2/core';
import { connect } from '../lib';
import { AppHeader } from '../components/app-header';
import { AppMain } from '../components/app-main';
import { AppFooter } from '../components/app-footer';

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
  `,
  directives: [
    AppHeader,
    AppMain,
    AppFooter
  ]
})
export class TodoApp {
  ngOnInit() {
    connect(mapStateToProps)(this);
  }
}
