// =====================
// === Nav Component ===
// =====================

// ====================
// === Local Import ===
// ====================
import './nav.scss';

// ======================
// === Package Import ===
// ======================
import { Moon } from 'react-feather';

const Nav = () => (
  <div className="nav-container">
    <div className="nav">
      <h1 className="nav__title">Where in the world ?</h1>
      <div className="nav__switch-mode">
        <Moon className="nav__switch-mode__icon" size={20} strokeWidth={1.5} />
        <p className="nav__switch-mode__text">Dark Mode</p>
      </div>
    </div>
  </div>
);

export default Nav;
