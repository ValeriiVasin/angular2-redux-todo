import { Component, Input } from 'angular2/core';

@Component({
  selector: 'todo-item',
  template: `
    <p [class.is-done]="isDone">{{text}}</p>
  `,
  styles: [
    `
      p { cursor: pointer }
      p.is-done { text-decoration: line-through; color: green; }
    `
  ]
})
export class Todo {
  @Input() text: string;
  @Input() isDone: boolean;
}
