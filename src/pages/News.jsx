import React, { useState, useEffect } from 'react';
import './News.css';
import ChurchNews from './news/ChurchNews';
import ChurchEvents from './news/ChurchEvents';
import ChurchSchedule from './news/ChurchSchedule';
import ChurchBulletin from './news/ChurchBulletin';
import PlaceholderTab from './news/PlaceholderTab';

import ChurchPrayer from './news/ChurchPrayer';

const News = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Initialize activeSubTab from URL query parameter or default to '교회소식'
    const getInitialTab = () => {
        const params = new URLSearchParams(window.location.search);
        const tabFromUrl = params.get('tab');
        return tabFromUrl || '교회소식';
    };

    const [activeSubTab, setActiveSubTab] = useState(getInitialTab());

    const subTabs = [
        '교회소식',
        '교회주보',
        '교회행사',
        '헌금안내',
        '교회스케줄',
        // '기도요청',
        // '심방요청',
        // '차량등록',
        // '하.동.삶 신청',
        // '영성훈련 피정 신청',
        '오늘의기도'
    ];

    const newsData = [];

    const itemsPerPage = 10;

    // Update URL when activeSubTab changes
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('tab', activeSubTab);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
    }, [activeSubTab]);

    // 활성 탭에 따른 데이터 선택 (페이지네이션을 위해)
    let currentTabData = [];
    if (activeSubTab === '교회소식') {
        currentTabData = newsData;
    }

    const totalPages = Math.ceil(currentTabData.length / itemsPerPage);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search:', searchQuery);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    // Render appropriate tab component
    const renderTabContent = () => {
        switch (activeSubTab) {
            case '교회소식':
                return <ChurchNews newsData={newsData} currentPage={currentPage} itemsPerPage={itemsPerPage} />;
            case '교회행사':
                return <ChurchEvents currentPage={currentPage} itemsPerPage={itemsPerPage} />;
            case '교회스케줄':
                return <ChurchSchedule />;
            case '교회주보':
                return <ChurchBulletin currentPage={currentPage} itemsPerPage={itemsPerPage} />;
            case '오늘의기도':
                return <ChurchPrayer currentPage={currentPage} itemsPerPage={itemsPerPage} />;
            case '헌금안내':
                return <PlaceholderTab tabName="헌금안내" />;
            case '기도요청':
                return <PlaceholderTab tabName="기도요청" />;
            case '심방요청':
                return <PlaceholderTab tabName="심방요청" />;
            case '차량등록':
                return <PlaceholderTab tabName="차량등록" />;
            case '하.동.삶 신청':
                return <PlaceholderTab tabName="하.동.삶 신청" />;
            case '영성훈련 피정 신청':
                return <PlaceholderTab tabName="영성훈련 피정 신청" />;
            default:
                return <ChurchNews newsData={newsData} currentPage={currentPage} itemsPerPage={itemsPerPage} />;
        }
    };

    return (
        <div className="news-page">

            {/* Sub Tabs Navigation */}
            <div className="news-subtabs-container">
                <div className="news-subtabs">
                    {subTabs.map((tab) => (
                        <button
                            key={tab}
                            className={`news-subtab ${activeSubTab === tab ? 'active' : ''}`}
                            onClick={() => {
                                setActiveSubTab(tab);
                                setCurrentPage(1);
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="news-header">
                <span className="news-label">CHURCH NEWS</span>
                <h1 className="news-title">{activeSubTab}</h1>
                <p className="news-subtitle">하나님의 사랑으로 세상을 밝히는 빛의교회의 다양한 소식을 전해드립니다.</p>
            </div>

            {/* Render appropriate tab component */}
            {renderTabContent()}

            {/* {activeSubTab !== '교회스케줄' && (
                <div className="news-footer">
                    <form className="news-search" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="news-search-input"
                        />
                        <button type="submit" className="news-search-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                        </button>
                    </form>

                    <div className="news-pagination">
                        <button
                            className="pagination-arrow"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            ‹
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="pagination-arrow"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default News;
