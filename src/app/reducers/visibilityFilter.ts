// TODO: Move to constants
export const FILTERS = {
  ALL: { text: 'All' },
  DONE: { text: 'Completed' },
  TODO: { text: 'Active' }
};

export const visibilityFilter = (filter = FILTERS.ALL, action) => {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  }

  return filter;
};
