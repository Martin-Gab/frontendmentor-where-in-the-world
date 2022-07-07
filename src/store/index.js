// =========================
// === Store for our App ===
// =========================

// ======================
// === Package Import ===
// ======================
import { configureStore } from '@reduxjs/toolkit';

// ======================
// === Reducer Import ===
// ======================
import searchReducer from '../reducers/searchReducer';

const reducer = {
  search: searchReducer,
};

const store = configureStore({ reducer });

export default store;