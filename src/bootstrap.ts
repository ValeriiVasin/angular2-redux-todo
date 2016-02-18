/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../node_modules/angular2/typings/es6-promise/es6-promise.d.ts"/>
/// <reference path="../node_modules/angular2/typings/es6-collections/es6-collections.d.ts"/>
/// <reference path="../project-typings.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app/app';

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err));
