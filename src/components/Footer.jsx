import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Social Media */}
                <div className="footer-social">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="footer-nav">
                    <ul>
                        <li><Link to="/jesus">예수님은</Link></li>
                        <li><Link to="/worship">예배</Link></li>
                        <li><Link to="/community">공동체</Link></li>
                        <li><Link to="/nurture">양육</Link></li>
                        <li><Link to="/mission">선교</Link></li>
                        <li><Link to="/intro">교회소개</Link></li>
                        <li><Link to="/news">교회소식</Link></li>
                        <li><Link to="/welcome">환영합니다</Link></li>
                    </ul>
                </nav>

                {/* Logo */}
                <div className="footer-logo">
                    <Link to="/" className="footer-logo-text">빛의교회</Link>
                </div>

                {/* Credit */}
                <div className="footer-credit">
                    Designed by Gemini 3 Pro
                </div>

                {/* Legal Links */}
                <div className="footer-legal">
                    <Link to="/terms">이용약관</Link>
                    <span className="footer-divider">|</span>
                    <Link to="/privacy">개인정보처리방침</Link>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    Copyright © {currentYear} 빛의교회 All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
