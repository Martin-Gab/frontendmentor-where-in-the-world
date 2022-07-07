// ======================================
// === Actions for the search section ===
// ======================================

// ====================
// === Action Types ===
// ====================
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const TOOGLE_SEARCH_FILTERS = 'TOOGLE_SEARCH_FILTERS';

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
