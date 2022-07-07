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
  addFilter,
  removeFilter,
} from '../../actions/search';

const Search = () => {
  // === Hook to dispatch actions ===
  const dispatch = useDispatch();

  // === Values from the searchReducer ===
  const searchInput = useSelector((state) => state.search.searchInput);
  const filterOpen = useSelector((state) => state.search.filterOpen);
  const filterRegionsSelected = useSelector((state) => state.search.filterRegionsSelected);

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
            <div 
              className="search__filter__options__item"
              onClick={(e) => {
                if (filterRegionsSelected.includes(e.currentTarget.textContent)) {
                  dispatch(removeFilter(filterRegionsSelected.indexOf(e.currentTarget.textContent)));
                }
                else {
                  dispatch(addFilter(e.currentTarget.textContent));
                }
              }}
            >
              Africa
            </div>
            <div 
              className="search__filter__options__item"
              onClick={(e) => {
                if (filterRegionsSelected.includes(e.currentTarget.textContent)) {
                  dispatch(removeFilter(filterRegionsSelected.indexOf(e.currentTarget.textContent)));
                }
                else {
                  dispatch(addFilter(e.currentTarget.textContent));
                }
              }}
            >
              America
            </div>
            <div 
              className="search__filter__options__item"
              onClick={(e) => {
                if (filterRegionsSelected.includes(e.currentTarget.textContent)) {
                  dispatch(removeFilter(filterRegionsSelected.indexOf(e.currentTarget.textContent)));
                }
                else {
                  dispatch(addFilter(e.currentTarget.textContent));
                }
              }}
            >
              Asia
            </div>
            <div 
              className="search__filter__options__item"
              onClick={(e) => {
                if (filterRegionsSelected.includes(e.currentTarget.textContent)) {
                  dispatch(removeFilter(filterRegionsSelected.indexOf(e.currentTarget.textContent)));
                }
                else {
                  dispatch(addFilter(e.currentTarget.textContent));
                }
              }}
            >
              Europe
            </div>
            <div 
              className="search__filter__options__item"
              onClick={(e) => {
                if (filterRegionsSelected.includes(e.currentTarget.textContent)) {
                  dispatch(removeFilter(filterRegionsSelected.indexOf(e.currentTarget.textContent)));
                }
                else {
                  dispatch(addFilter(e.currentTarget.textContent));
                }
              }}
            >
              Oceania
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Search;
