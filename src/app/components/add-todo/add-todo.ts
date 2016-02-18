import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'add-todo',
  template: `
    <form (submit)="onSubmit($event)">
      <input [(ngModel)]="value" />
      <button type="submit">Add</button>
    </form>
  `
})
export class AddTodo {
  @Output() add = new EventEmitter();
  public value: string = '';

  onSubmit(event) {
    event.preventDefault();

    this.add.emit({ value: this.value });
    this.value = '';
  }
}
