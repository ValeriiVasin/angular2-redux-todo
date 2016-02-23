import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-item',
  template: `
    <li [ngClass]="{
      completed: isDone
    }">
      <div class="view">
        <input class="toggle" type="checkbox" [checked]="isDone" (change)="onToggle()" />
        <label (click)="onToggle()">{{text}}</label>
        <button class="destroy" (click)="onDestroy()"></button>
      </div>
      <input class="edit" value="asdfasf">
    </li>
  `
})
export class Todo {
  @Input() text: string;
  @Input() isDone: boolean;
  @Output() toggle = new EventEmitter();
  @Output() destroy = new EventEmitter();

  onToggle() {
    this.toggle.emit('<why i should provide a value?>');
  }

  onDestroy() {
    this.destroy.emit('<why i should provide a value?>');
  }
}
