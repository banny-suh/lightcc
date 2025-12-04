import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <li><Link to="/jesus" onClick={() => setIsMenuOpen(false)}>예수님은</Link></li>
            <li><Link to="/worship" onClick={() => setIsMenuOpen(false)}>예배</Link></li>
            <li><Link to="/community" onClick={() => setIsMenuOpen(false)}>공동체</Link></li>
            <li><Link to="/nurture" onClick={() => setIsMenuOpen(false)}>양육</Link></li>
            <li><Link to="/mission" onClick={() => setIsMenuOpen(false)}>선교</Link></li>
            <li><Link to="/intro" onClick={() => setIsMenuOpen(false)}>교회소개</Link></li>
            <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>교회소식</Link></li>
            <li><Link to="/welcome" onClick={() => setIsMenuOpen(false)}>환영합니다</Link></li>
          </ul>
        </nav>

        <button className="header__toggle" onClick={toggleMenu}>
          MENU
        </button>
      </div>
    </header>
  );
};

export default Header;
