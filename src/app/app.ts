import { Component, provide } from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { TodoApp } from './containers/todo-app';
import { Store } from './store';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  providers: [Store]
})
@RouteConfig([
  new Route({ path: '/', component: TodoApp, name: 'TodoApp', useAsDefault: true })
])
export class App {
}
