// =======================================
// === Reducer for timeframe selection ===
// =======================================

// ======================
// === Actions Import ===
// ======================
import {
  SEARCH_INPUT_CHANGE,
  TOOGLE_SEARCH_FILTERS,
  ADD_FILTER,
  REMOVE_FILTER,
} from "../actions/search";

// =================================
// === Initial State declaration ===
// =================================
const initialState = {
  searchInput: '',
  filterOpen: false,
  filterRegionsSelected: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE:
      return {
        ...state,
        searchInput: action.value,
      };

    case TOOGLE_SEARCH_FILTERS:
      return {
        ...state,
        filterOpen: !state.filterOpen,
      };

    case ADD_FILTER:
      return {
        ...state,
        filterRegionsSelected: state.filterRegionsSelected.concat(action.region),
      };

    case REMOVE_FILTER:
      const firstPartOfArray = state.filterRegionsSelected.slice(0, action.index);
      const secondPartOfArray = state.filterRegionsSelected.slice(action.index + 1);
      return {
        ...state,
        filterRegionsSelected: firstPartOfArray.concat(secondPartOfArray),
      }

    default:
      return state;
  }
};

export default searchReducer;
