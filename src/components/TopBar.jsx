import React, { useState } from 'react';
import { FaBars, FaSignInAlt, FaUserPlus, FaYoutube, FaSearch } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import './TopBar.css';

const TopBar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleSignupClick = () => {
        setShowSignupModal(true);
    };

    const handleSwitchToSignup = () => {
        setShowLoginModal(false);
        setShowSignupModal(true);
    };

    const handleSwitchToLogin = () => {
        setShowSignupModal(false);
        setShowLoginModal(true);
    };

    return (
        <>
            <div className="top-bar">
                <div className="container top-bar__container">
                    <div className="top-bar__left">
                        {/* <div className="top-bar__menu-icon">
                            <FaBars />
                        </div> */}
                    </div>

                    <div className="top-bar__right">
                        <div className="top-bar__link" onClick={handleLoginClick}>
                            <FaSignInAlt />
                            <span>로그인</span>
                        </div>

                        <div className="top-bar__link" onClick={handleSignupClick}>
                            <FaUserPlus />
                            <span>회원가입</span>
                        </div>

                        <div className="top-bar__divider"></div>

                        <a href="https://www.youtube.com/@lightcommunitychurch3349" target="_blank" rel="noopener noreferrer" className="top-bar__youtube">
                            <FaYoutube />
                        </a>

                        <div className="top-bar__search">
                            <input type="text" placeholder="Search" className="top-bar__search-input" />
                            <FaSearch className="top-bar__search-icon" />
                        </div>
                    </div>
                </div>
            </div>

            {showLoginModal && (
                <LoginModal
                    onClose={() => setShowLoginModal(false)}
                    onSwitchToSignup={handleSwitchToSignup}
                />
            )}

            {showSignupModal && (
                <SignupModal
                    onClose={() => setShowSignupModal(false)}
                    onSwitchToLogin={handleSwitchToLogin}
                />
            )}
        </>
    );
};

export default TopBar;
