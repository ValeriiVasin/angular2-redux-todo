import { Component } from 'angular2/core';
import { Store } from '../../store';
import { TodoList } from '../todos/todos';

@Component({
  selector: 'home',
  template: `
    <h3>Home Component</h3>
    <todo-list [todos]="todos"></todo-list>
    <button (click)="onAddTodo()">Add todo</button>
  `,
  directives: [TodoList]
})
export class Home {
  public todos: Object[];
  private unsubscribe: Function;

  constructor(private store: Store) {}

  onAddTodo() {
    this.store.dispatch({ type: 'CREATE_TODO' });
  }

  ngOnInit() {
    this.todos = this.store.getState().todos;

    this.unsubscribe = this.store.subscribe(() => {
      this.todos = this.store.getState().todos;
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
