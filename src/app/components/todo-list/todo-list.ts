import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'todo-list',
  template: `
    <todo-item
      *ngFor="#todo of todos"
      [text]="todo.text"
      [isDone]="todo.isDone"
      (click)="handleTodoClick(todo)"
      ></todo-item>
  `,
  directives: [Todo]
})
export class TodoList {
  @Input() todos: Object[];
  @Output() todoClick = new EventEmitter();

  handleTodoClick({ id }) {
    this.todoClick.emit({ id });
  }
}
