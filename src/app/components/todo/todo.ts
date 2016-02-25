import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Focus } from '../../directives/focus';

@Component({
  selector: 'todo-item',
  template: `
    <li [ngClass]="{
      completed: isDone,
      editing: isEditing
    }">
      <div class="view">
        <input class="toggle" type="checkbox" [checked]="isDone" (change)="onToggle()" />
        <label (dblclick)="onEdit()">{{text}}</label>
        <button class="destroy" (click)="onDestroy()"></button>
      </div>
      <input
        #editable
        class="edit"
        value="{{text}}"
        [focus]="isEditing"
        (keyup.enter)="onKeyboardSave(editable.value)"
        (keyup.escape)="onCancelEdit(); editable.value = text;"
        (blur)="onBlurSave(editable.value)"
        />
    </li>
  `,
  directives: [Focus]
})
export class Todo {
  @Input() text: string;
  @Input() isDone: boolean;
  @Input() isEditing: boolean;

  @Output() toggle = new EventEmitter();
  @Output() destroy = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() cancelEdit = new EventEmitter();

  private _preventSaveOnBlur = false;

  // TODO: Remove `null` when typescript interface will be fixed

  onToggle() {
    this.toggle.emit(null);
  }

  onEdit() {
    this.edit.emit(null);
  }

  onKeyboardSave(value) {
    this.save.emit({ value });
    this._preventSaveOnBlur = true;
    setTimeout(() => this._preventSaveOnBlur = false, 0);
  }

  onBlurSave(value) {
    if (!this._preventSaveOnBlur) {
      this.save.emit({ value });
    }
  }

  onDestroy() {
    this.destroy.emit(null);
  }

  onCancelEdit() {
    this.cancelEdit.emit(null);
  }
}
