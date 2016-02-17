import { Component, provide } from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { Home } from './components/home/home';
import { Store } from './store';

@Component({
  selector: 'app',
  templateUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  providers: [Store]
})
@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true})
])
export class App {
}
