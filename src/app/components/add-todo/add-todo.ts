import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'add-todo',
  template: `
    <input
      id="new-todo"
      placeholder="What needs to be done?"
      value=""
      (keyup.enter)="onSubmit($event)"
      />
  `
})
export class AddTodo {
  @Output() add = new EventEmitter();

  onSubmit(event) {
    event.preventDefault();

    this.add.emit({ value: event.target.value });
    event.target.value = '';
  }
}
