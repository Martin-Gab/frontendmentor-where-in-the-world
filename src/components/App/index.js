// =====================
// === App Component ===
// =====================

// ====================
// === Local Import ===
// ====================
import './app.scss';

// ========================
// === Component Import ===
// ========================
import Nav from '../Nav';
import Search from '../Search';

function App() {
  return (
    <div className="app">
      <Nav />
      <Search />
    </div>
  );
}

export default App;
