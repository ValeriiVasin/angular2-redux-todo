const initialTodos = [
  { text: 'one' },
  { text: 'two' },
  { text: 'three' }
];

export const todos = (todos = initialTodos, action) => {
  if (action.type === 'CREATE_TODO') {
      return [...todos, { text: 'Hello there' }];
  }

  return todos;
};
