import { Component } from 'angular2/core';
import { Store } from '../store';
import { TodoList } from '../components/todo-list/todo-list';

@Component({
  selector: 'todo-list-container',
  template: `
    <todo-list [todos]="todos"></todo-list>
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
