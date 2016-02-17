import { Component, Input } from 'angular2/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>{{text}}</p>
  `
})
export class TodoComponent {
  @Input() text: string;
}