/// <reference path="../typings.d.ts" />

import {bootstrap} from 'angular2/platform/browser';

import {TodoApp} from './app/containers/todo-app';

bootstrap(TodoApp, [])
  .catch(err => console.error(err));
