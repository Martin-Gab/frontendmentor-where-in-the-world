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
          <ChevronDown />
        </div>
        <div className="search__filter__options">
          <ul>
            <li className="search__filter__options__item">Africa</li>
            <li className="search__filter__options__item">America</li>
            <li className="search__filter__options__item">Asia</li>
            <li className="search__filter__options__item">Europe</li>
            <li className="search__filter__options__item">Oceania</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default Search;
