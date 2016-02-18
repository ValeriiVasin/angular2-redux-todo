const initialTodos = [
  { text: 'one' },
  { text: 'two' },
  { text: 'three' }
];

export const todos = (todos = initialTodos, action) => {
  if (action.type === 'CREATE_TODO') {
      return [...todos, { text: action.value }];
  }

  return todos;
};
