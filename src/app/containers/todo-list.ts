import { Component } from 'angular2/core';
import { Store } from '../store';
import { TodoList } from '../components/todo-list/todo-list';

@Component({
  selector: 'todo-list-container',
  template: `
    <todo-list [todos]="todos" (todoClick)="onTodoClick($event)"></todo-list>
  `,
  directives: [TodoList]
})
export class TodoListContainer {
  public todos: Object[];
  private unsubscribe: Function;

  constructor(private store: Store) {}

  mapStateToProps(state) {
    return {
      todos: state.todos
    };
  }

  onTodoClick({ id }) {
    this.store.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  ngOnInit() {
    Object.assign(this, this.mapStateToProps(this.store.getState()));

    this.unsubscribe = this.store.subscribe(() => {
      this.todos = this.store.getState().todos;
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
