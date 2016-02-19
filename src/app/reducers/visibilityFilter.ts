// TODO: Move to constants
export const FILTERS = {
  ALL: { text: 'ALL' },
  DONE: { text: 'DONE' },
  TODO: { text: 'TODO' }
};

export const visibilityFilter = (filter = FILTERS.ALL, action) => {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  }

  return filter;
};
