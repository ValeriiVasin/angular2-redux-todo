import { Component } from 'angular2/core';
import { Store } from '../store';
import { TodoList } from '../components/todo-list/todo-list';

import { FILTERS } from '../reducers/visibilityFilter';

const filteredTodos = (todos, filter) => {
  return todos.filter(todo => {
    if (filter === FILTERS.ALL) {
      return true;
    }

    if (filter === FILTERS.DONE) {
      return todo.isDone;
    }

    if (filter === FILTERS.TODO) {
      return !todo.isDone;
    }
  });
};

const mapStateToProps = (state) => {
  return {
    todos: filteredTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo({ id }) {
      dispatch({ type: 'TOGGLE_TODO', id });
    },

    onDestroyTodo({ id }) {
      dispatch({ type: 'DESTROY_TODO', id });
    }
  };
};

@Component({
  selector: 'todo-list-container',
  template: `
    <todo-list
      [todos]="todos"
      (toggleTodo)="onToggleTodo($event)"
      (destroyTodo)="onDestroyTodo($event)"
      ></todo-list>
  `,
  directives: [TodoList]
})
export class TodoListContainer {
  public todos: Object[];
  private unsubscribe: Function;

  constructor(private store: Store) {}

  ngOnInit() {
    Object.assign(this, mapStateToProps(this.store.getState()));
    Object.assign(this, mapDispatchToProps(this.store.dispatch.bind(this.store)));

    this.unsubscribe = this.store.subscribe(() => {
      Object.assign(this, mapStateToProps(this.store.getState()));
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
