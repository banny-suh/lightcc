import React, { useState } from 'react';
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
          <a href="/">빛의교회</a>
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li><a href="#jesus">예수님은</a></li>
            <li><a href="#worship">예배</a></li>
            <li><a href="#community">공동체</a></li>
            <li><a href="#nurture">양육</a></li>
            <li><a href="#mission">선교</a></li>
            <li><a href="#intro">교회소개</a></li>
            <li><a href="#news">교회소식</a></li>
            <li><a href="#welcome">환영합니다</a></li>
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
