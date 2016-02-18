import { Component, Input } from 'angular2/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'todo-list',
  template: `
    <todo-item *ngFor="#todo of todos" [text]="todo.text"></todo-item>
  `,
  directives: [Todo]
})
export class TodoList {
  @Input() todos: Object[];
}
