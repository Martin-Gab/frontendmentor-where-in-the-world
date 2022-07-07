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
import { ChevronDown, Search as SearchIcon } from 'react-feather';

const Search = () => (
  <div className="search-container">
    <div className="search">

      <div className="search__input">
        <SearchIcon className="search__input__icon" size={20} />
        <input type="text" className="search__input__field" placeholder="Search for a country..." />
      </div>

      <div className="search__filter">
        <div className="search__filter__select">
          <p>Filter by Region</p>
          <ChevronDown size={16} />
        </div>
        <div className="search__filter__options search__filter__options--hide">
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

export default Search;
