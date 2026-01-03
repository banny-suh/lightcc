import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FiHome, FiFileText, FiBook, FiImage, FiLogOut } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Admin.css';

// Import Sub-Pages
import BulletinManager from './admin/BulletinManager';
import NewsManager from './admin/NewsManager';
import PrayerManager from './admin/PrayerManager';
import PosterManager from './admin/PosterManager';

const Admin = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // Get active tab from URL search params, default to 'bulletin'
    const activeTab = searchParams.get('tab') || 'news';

    const handleTabChange = (tabId) => {
        setSearchParams({ tab: tabId });
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin/login');
        } catch (error) {
            console.error('로그아웃 오류:', error);
            alert('로그아웃 중 오류가 발생했습니다.');
        }
    };

    const menuItems = [
        { id: 'news', label: '소식 관리', icon: <FiFileText /> },
        { id: 'bulletin', label: '주보 관리', icon: <FiFileText /> },
        { id: 'prayer', label: '오늘의 기도 관리', icon: <FiBook /> },
        { id: 'poster', label: '행사 포스터 관리', icon: <FiImage /> },
    ];

    return (
        <div className="admin-wrapper">
            {/* Sidebar */}
            <div className="admin-sidebar">
                <div className="sidebar-home-btn" onClick={() => navigate('/')}>
                    <FiHome className="sidebar-icon" /> 홈으로 이동
                </div>
                <div className="admin-menu-title">ADMIN MENU</div>
                <ul className="admin-menu-list">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`admin-menu-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => handleTabChange(item.id)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="sidebar-logout-btn" onClick={handleLogout}>
                    <FiLogOut className="sidebar-icon" /> 로그아웃
                </div>
            </div>

            {/* Main Content Area */}
            <div className="admin-content">
                {activeTab === 'bulletin' && <BulletinManager />}
                {activeTab === 'news' && <NewsManager />}
                {activeTab === 'prayer' && <PrayerManager />}
                {activeTab === 'poster' && <PosterManager />}
            </div>
        </div>
    );
};

export default Admin;
