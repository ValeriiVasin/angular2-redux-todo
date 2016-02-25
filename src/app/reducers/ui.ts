const uiInitialState = {
  editingTodoId: null
};

export const ui = (uiState = uiInitialState, action) => {
  if (action.type === 'EDIT_TODO') {
    return Object.assign(uiState, { editingTodoId: action.id });
  }

  if (action.type === 'SAVE_TODO') {
    return Object.assign(uiState, { editingTodoId: null });
  }

  if (action.type === 'CANCEL_EDIT_TODO') {
    return Object.assign(uiState, { editingTodoId: null });
  }

  return uiState;
};
