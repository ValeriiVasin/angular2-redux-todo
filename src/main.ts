/// <reference path="../typings.d.ts" />

declare let process;

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

import {TodoApp} from './app/containers/todo-app';

bootstrap(TodoApp, [])
  .catch(err => console.error(err));
