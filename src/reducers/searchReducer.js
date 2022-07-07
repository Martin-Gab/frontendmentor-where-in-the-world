// =======================================
// === Reducer for timeframe selection ===
// =======================================

// ======================
// === Actions Import ===
// ======================
import { SEARCH_INPUT_CHANGE } from "../actions/search";

// =================================
// === Initial State declaration ===
// =================================
const initialState = {
  searchInput: '',
  filterOpen: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE:
      return {
        ...state,
        searchInput: action.value,
      }

    default:
      return state;
  }
};

export default searchReducer;
