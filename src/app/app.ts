import { createStore } from 'redux';
import { rootReducer } from './reducers/root';

import { Component, provide } from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { TodoApp } from './containers/todo-app';
import { connector } from './lib';

const store = window.devToolsExtension ?
  window.devToolsExtension()(createStore)(rootReducer) :
  createStore(rootReducer);

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  providers: [
    provide('connect', { useValue: <Function>connector(store) })
  ]
})
@RouteConfig([
  new Route({ path: '/', component: TodoApp, name: 'TodoApp', useAsDefault: true })
])
export class App {
}
