import { Component, Input } from '@angular/core';
import { connect } from '../lib';
import {
  toggleTodo,
  destroyTodo,
  editTodo,
  saveTodo,
  cancelTodoEdit
} from '../actions';

const mapStateToProps = (state, props) => {
  return {
    text: props.todo.text,
    isDone: props.todo.isDone,
    isEditing: state.ui.editingTodoId === props.todo.id
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggle: () => dispatch(toggleTodo({ id: props.todo.id })),
    onDestroy: () => dispatch(destroyTodo({ id: props.todo.id })),
    onEdit: () => dispatch(editTodo({ id: props.todo.id })),
    onSave: ({ value }) => dispatch(saveTodo({ id: props.todo.id, value })),
    onCancelEdit: () => dispatch(cancelTodoEdit({ id: props.todo.id }))
  };
};

@Component({
  selector: 'todo-item-container',
  template: `
    <todo-item
      [text]="text"
      [isDone]="isDone"
      [isEditing]="isEditing"
      (toggle)="onToggle()"
      (destroy)="onDestroy()"
      (edit)="onEdit()"
      (cancelEdit)="onCancelEdit()"
      (save)="onSave($event)"
      ></todo-item>
  `,
})
export class TodoContainer {
  @Input() todo;

  ngOnInit() {
    connect(mapStateToProps, mapDispatchToProps)(this);
  }
}
