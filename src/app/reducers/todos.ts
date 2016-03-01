export const getRemainingTodosCount = (todos) => {
  return todos.filter(todo => !todo.isDone).length;
};

const updateTodo = (todos, id, changes) => {
  return todos.map((todo) => {
    if (todo.id !== id) {
      return todo;
    }

    if (typeof changes === 'function') {
      return Object.assign({}, todo, changes(todo));
    }

    return Object.assign({}, todo, changes);
  });
};

export const todos = (todos = [], action) => {
  if (action.type === 'CREATE_TODO') {
      return [...todos, {
        text: action.value,
        id: Date.now(),
        isDone: false
      }];
  }

  if (action.type === 'TOGGLE_TODO') {
    return updateTodo(todos, action.id, (todo) => ({ isDone: !todo.isDone }));
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

  if (action.type === 'SAVE_TODO') {
    return updateTodo(todos, action.id, { text: action.value });
  }

  return todos;
};
