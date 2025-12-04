import React from 'react';
import { FaBars, FaSignInAlt, FaUserPlus, FaYoutube, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container top-bar__container">
                <div className="top-bar__left">
                    <div className="top-bar__menu-icon">
                        <FaBars />
                    </div>
                </div>

                <div className="top-bar__right">
                    <Link to="/login" className="top-bar__link">
                        <FaSignInAlt />
                        <span>로그인</span>
                    </Link>

                    <Link to="/signup" className="top-bar__link">
                        <FaUserPlus />
                        <span>회원가입</span>
                    </Link>

                    <div className="top-bar__divider"></div>

                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="top-bar__youtube">
                        <FaYoutube />
                    </a>

                    <div className="top-bar__search">
                        <input type="text" placeholder="Search" className="top-bar__search-input" />
                        <FaSearch className="top-bar__search-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
