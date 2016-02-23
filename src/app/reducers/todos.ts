const initialTodos = [
  { text: 'one', id: 1, isDone: false },
  { text: 'two', id: 2, isDone: false },
  { text: 'three', id: 3, isDone: false }
];

export const todos = (todos = initialTodos, action) => {
  if (action.type === 'CREATE_TODO') {
      return [...todos, {
        text: action.value,
        id: Date.now(),
        isDone: false
      }];
  }

  if (action.type === 'TOGGLE_TODO') {
    return todos.map((todo) => {
      if (todo.id !== action.id) {
        return todo;
      }

      return Object.assign({}, todo, { isDone: !todo.isDone })
    });
  }

  if (action.type === 'DESTROY_TODO') {
    return todos.filter((todo) => todo.id !== action.id);
  }

  return todos;
};
