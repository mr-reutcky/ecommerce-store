import { NavLink } from 'react-router-dom';

function Header({ links }) {
  return (
    <header className="header">
      <div className="header-container container">
        <h1 className="logo">E-commerce Store</h1>
        <nav>
          <ul className="nav-list">
            {links.map((link) => (
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
      </div>
    </header>
  );
}

export default Header;
