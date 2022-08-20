import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Css
import './header.css';

const Header = () => {
  const [ menuClicked, setMenuClicked ] = useState(false);

  return (
    <header className='header'>
      {/* Navbar */}
      <nav
        className={menuClicked ? 'menu-visible' : ''}
      >
        <ul>
          <li>
            <NavLink
              onClick={() => setMenuClicked(false)}
              to='/'
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuClicked(false)} 
              to='/work'
            >
              work
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuClicked(false)} 
              to='/contact'
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Sandwich Menu */}
      <div 
        onClick={() => setMenuClicked(!menuClicked)}
        className={menuClicked ? 
          'sandwich-menu clicked' : 
          'sandwich-menu'}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;