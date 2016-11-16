import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AddTodo } from './app/components/add-todo';
import { AppFooter } from './app/components/app-footer';
import { AppHeader } from './app/components/app-header';
import { AppMain } from './app/components/app-main';
import { Link } from './app/components/link';
import { Todo } from './app/components/todo';
import { TodoList } from './app/components/todo-list';
import { TodosFilters } from './app/components/todos-filters';

// containers
import { AddTodoContainer } from './app/containers/add-todo';
import { ClearCompletedContainer } from './app/containers/clear-completed';
import { FilterLink } from './app/containers/filter-link';
import { TodoContainer } from './app/containers/todo';
import { TodoApp } from './app/containers/todo-app';
import { TodoListContainer } from './app/containers/todo-list';
import { TodosCounterContainer } from './app/containers/todos-counter';
import { ToggleAllContainer } from './app/containers/toggle-all';

import { Focus } from './app/directives/focus';

@NgModule({
  declarations: [
    AddTodo,
    AppFooter,
    AppHeader,
    AppMain,
    Link,
    Todo,
    TodoList,
    TodosFilters,

    AddTodoContainer,
    ClearCompletedContainer,
    FilterLink,
    TodoContainer,
    TodoApp,
    TodoListContainer,
    TodosCounterContainer,
    ToggleAllContainer,

    Focus
  ],
  imports: [BrowserModule],
  bootstrap: [TodoApp]
})
export class AppModule {};
