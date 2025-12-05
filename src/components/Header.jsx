import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <img src="/images/logo.png" alt="빛의교회" className="logo-image" />
          </Link>
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li><Link to="/jesus" onClick={() => setIsMenuOpen(false)} className={isActive('/jesus') ? 'active' : ''}>예수님은</Link></li>
            <li><Link to="/worship" onClick={() => setIsMenuOpen(false)} className={isActive('/worship') ? 'active' : ''}>예배</Link></li>
            <li><Link to="/community" onClick={() => setIsMenuOpen(false)} className={isActive('/community') ? 'active' : ''}>공동체</Link></li>
            <li><Link to="/nurture" onClick={() => setIsMenuOpen(false)} className={isActive('/nurture') ? 'active' : ''}>양육</Link></li>
            <li><Link to="/mission" onClick={() => setIsMenuOpen(false)} className={isActive('/mission') ? 'active' : ''}>선교</Link></li>
            <li><Link to="/intro" onClick={() => setIsMenuOpen(false)} className={isActive('/intro') ? 'active' : ''}>교회소개</Link></li>
            <li><Link to="/news" onClick={() => setIsMenuOpen(false)} className={isActive('/news') ? 'active' : ''}>교회소식</Link></li>
            <li><Link to="/welcome" onClick={() => setIsMenuOpen(false)} className={isActive('/welcome') ? 'active' : ''}>환영합니다</Link></li>
          </ul>
        </nav>

        <button className="header__toggle" onClick={toggleMenu}>
          MENU
        </button>
      </div>
      {/* Overlay for mobile menu */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
    </header>
  );
};

export default Header;
