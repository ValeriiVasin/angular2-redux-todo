import { Component, Inject } from 'angular2/core';
import { TodoList } from '../components/todo-list';
import { FILTERS } from '../reducers/visibilityFilter';

const visibleTodos = (todos, filter) => {
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
    todos: visibleTodos(state.todos, state.visibilityFilter)
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
  constructor(@Inject('connect') connect) {
    connect(mapStateToProps)(this);
  }
}
