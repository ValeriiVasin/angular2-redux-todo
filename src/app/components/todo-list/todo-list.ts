import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'todo-list',
  template: `
    <ul id="todo-list">
      <todo-item
        *ngFor="#todo of todos"
        [text]="todo.text"
        [isDone]="todo.isDone"
        (toggle)="onToggleTodo(todo)"
        (destroy)="onDestroyTodo(todo)"
        ></todo-item>
    <ul>
  `,
  directives: [Todo]
})
export class TodoList {
  @Input() todos: Object[];
  @Output() toggleTodo = new EventEmitter();
  @Output() destroyTodo = new EventEmitter();

  onToggleTodo({ id }) {
    this.toggleTodo.emit({ id });
  }

  onDestroyTodo({ id }) {
    this.destroyTodo.emit({ id });
  }
}
