import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Todo } from '../components/todo/todo';
import { Store } from '../store';
import { connect } from '../lib';

const mapStateToProps = (state, props) => {
  return {
    text: props.todo.text,
    isDone: props.todo.isDone,
    isEditing: state.ui.editingTodoId === props.todo.id
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggle() {
      dispatch({ type: 'TOGGLE_TODO', id: props.todo.id });
    },
    onDestroy() {
      dispatch({ type: 'DESTROY_TODO', id: props.todo.id });
    },
    onEdit() {
      dispatch({ type: 'EDIT_TODO', id: props.todo.id });
    },
    onSave({ value }) {
      dispatch({ type: 'SAVE_TODO', id: props.todo.id, value });
    },
    onCancelEdit() {
      dispatch({ type: 'CANCEL_EDIT_TODO' });
    }
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
  directives: [Todo]
})
export class TodoContainer {
  @Input() todo;

  constructor(private store: Store) {}

  ngOnInit() {
    connect({ component: this, store: this.store, mapStateToProps, mapDispatchToProps });
  }
}
