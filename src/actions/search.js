// ======================================
// === Actions for the search section ===
// ======================================

// ====================
// === Action Types ===
// ====================
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';

// =======================
// === Action Creators ===
// =======================
export const searchInputChange = (newInputValue) => ({
  type: SEARCH_INPUT_CHANGE,
  value: newInputValue,
});
