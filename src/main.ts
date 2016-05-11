/// <reference path="../typings.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';

import {TodoApp} from './app/containers/todo-app';

bootstrap(TodoApp, [])
  .catch(err => console.error(err));
