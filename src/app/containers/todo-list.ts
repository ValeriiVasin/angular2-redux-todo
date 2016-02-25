import { Component } from 'angular2/core';
import { Store } from '../store';
import { TodoList } from '../components/todo-list/todo-list';
import { FILTERS } from '../reducers/visibilityFilter';
import { connect } from '../lib';

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

@Component({
  selector: 'todo-list-container',
  template: `
    <todo-list [todos]="todos"></todo-list>
  `,
  directives: [TodoList]
})
export class TodoListContainer {
  constructor(private store: Store) {}

  ngOnInit() {
    connect({ component: this, store: this.store, mapStateToProps });
  }
}
