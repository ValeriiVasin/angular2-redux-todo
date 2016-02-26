export const createTodo = ({ value }) => ({ type: 'CREATE_TODO', value });

export const clearCompletedTodos = () => ({ type: 'CLEAR_COMPLETED_TODOS' });

export const setVisibilityFilter = ({ filter }) => ({ type: 'SET_VISIBILITY_FILTER', filter });

export const toggleTodo = ({ id }) => ({ type: 'TOGGLE_TODO', id });

export const destroyTodo = ({ id }) => ({ type: 'DESTROY_TODO', id });

export const editTodo = ({ id }) => ({ type: 'EDIT_TODO', id });

export const saveTodo = ({ id, value }) => ({ type: 'SAVE_TODO', id, value });

export const cancelTodoEdit = ({ id }) => ({ type: 'CANCEL_EDIT_TODO' });

export const toggleAllTodos = () => ({ type: 'TOGGLE_ALL_TODOS' });
