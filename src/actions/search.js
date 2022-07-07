// ======================================
// === Actions for the search section ===
// ======================================

// ====================
// === Action Types ===
// ====================
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const TOOGLE_SEARCH_FILTERS = 'TOOGLE_SEARCH_FILTERS';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

// =======================
// === Action Creators ===
// =======================
export const searchInputChange = (newInputValue) => ({
  type: SEARCH_INPUT_CHANGE,
  value: newInputValue,
});

export const toggleSearchFilters = () => ({
  type: TOOGLE_SEARCH_FILTERS,
});

export const addFilter = (regionSelected) => ({
  type: ADD_FILTER,
  region: regionSelected,
});

export const removeFilter = (indexOfElementToRemove) => ({
  type: REMOVE_FILTER,
  index: indexOfElementToRemove,
});
