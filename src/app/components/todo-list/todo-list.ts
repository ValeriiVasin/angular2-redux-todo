import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoContainer } from '../../containers/todo';

@Component({
  selector: 'todo-list',
  template: `
    <ul id="todo-list">
      <todo-item-container *ngFor="#todo of todos" [todo]="todo"></todo-item-container>
    </ul>
  `,
  directives: [TodoContainer]
})
export class TodoList {
  @Input() todos: Object[];
  @Output() toggleTodo = new EventEmitter();
  @Output() destroyTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();
  @Output() saveTodo = new EventEmitter();

  onToggleTodo({ id }) {
    this.toggleTodo.emit({ id });
  }

  onDestroyTodo({ id }) {
    this.destroyTodo.emit({ id });
  }

  onEditTodo({ id }) {
    this.editTodo.emit({ id });
  }

  onSaveTodo({ value }, todo) {
    this.saveTodo.emit({ value, id: todo.id });
  }
}
