// ========================
// === Search Component ===
// ========================

// ====================
// === Local Import ===
// ====================
import './search.scss';

// ======================
// === Package Import ===
// ======================
import { ChevronDown, ChevronUp, Search as SearchIcon } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

// =====================
// === Action Import ===
// =====================
import {
  searchInputChange,
  toggleSearchFilters,
} from '../../actions/search';

const Search = () => {
  // === Hook to dispatch actions ===
  const dispatch = useDispatch();

  // === Values from the searchReducer ===
  const searchInput = useSelector((state) => state.search.searchInput);
  const filterOpen = useSelector((state) => state.search.filterOpen);

  return (
    <div className="search-container">
      <div className="search">

        <div className="search__input">
          <SearchIcon className="search__input__icon" size={20} />
          <input
            type="text"
            className="search__input__field"
            placeholder="Search for a country..."
            value={searchInput}
            onChange={(e) => {
              dispatch(searchInputChange(e.currentTarget.value));
            }}
          />
        </div>

        <div className="search__filter">
          <div
            className="search__filter__select"
            onClick={() => {
              dispatch(toggleSearchFilters());
            }}
          >
            <p>Filter by Region</p>
            {filterOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
          <div
            className={filterOpen ? 'search__filter__options' : 'search__filter__options search__filter__options--hide'}
          >
            <div className="search__filter__options__item">Africa</div>
            <div className="search__filter__options__item">America</div>
            <div className="search__filter__options__item">Asia</div>
            <div className="search__filter__options__item">Europe</div>
            <div className="search__filter__options__item">Oceania</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Search;
