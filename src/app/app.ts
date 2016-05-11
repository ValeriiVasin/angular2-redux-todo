import { Component } from 'angular2/core';
import { Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { TodoApp } from './containers/todo-app';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  providers: []
})
@RouteConfig([
  new Route({ path: '/', component: TodoApp, name: 'TodoApp', useAsDefault: true })
])
export class App {
}
