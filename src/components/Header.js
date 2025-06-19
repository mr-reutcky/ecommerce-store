import { Link, NavLink } from 'react-router-dom';
import { useCart } from './CartContext';
import { FiShoppingCart } from 'react-icons/fi';

function Header({ links,onCartClick }) {
  const { state } = useCart();  
  const itemCount = state.items.reduce((n, i) => n + i.qty, 0);
  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/"><h1 className="logo">Remu</h1></Link>
        <nav>
          <ul className="nav-list">
            {links.filter(link => !link.hidden).map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="cart-btn"
          onClick={onCartClick}
          aria-label="Open cart drawer"
        >
          <FiShoppingCart size={22} />
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>

      </div>
    </header>
  );
}

export default Header;
