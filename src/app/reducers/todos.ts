const initialTodos = [
  { text: 'one', id: 1, isDone: false },
  { text: 'two', id: 2, isDone: false },
  { text: 'three', id: 3, isDone: false }
];

export const getRemainingTodosCount = (todos) => {
  return todos.filter(todo => !todo.isDone).length;
};

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

  if (action.type === 'CLEAR_COMPLETED_TODOS') {
    return todos.filter((todo) => !todo.isDone);
  }

  if (action.type === 'DESTROY_TODO') {
    return todos.filter((todo) => todo.id !== action.id);
  }

  if (action.type === 'TOGGLE_ALL_TODOS') {
    const isDone = getRemainingTodosCount(todos) !== 0;
    return todos.map(todo => Object.assign({}, todo, { isDone }));
  }

  return todos;
};
