import React, { useState } from 'react';
import './News.css';
import ChurchCalendar from '../components/ChurchCalendar';

const News = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState('교회소식');

    const subTabs = [
        '교회소식',
        '교회주보',
        '교회행사',
        '헌금안내',
        '교회스케줄',
        '기도요청',
        '심방요청',
        '차량등록',
        '하.동.삶 신청',
        '영성훈련 피정 신청',
        '오늘의기도'
    ];

    // 교회소식 데이터 (newsData)
    const newsData = [
        {
            id: 1,
            title: '故 박완서 집사 소천',
            date: '2025-09-21',
            views: 137,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 2,
            title: '5월 26일 故 유해종 집사 (강금숙 권사의 부군, 자녀 유도형) 소천',
            date: '2025-05-27',
            views: 223,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 3,
            title: '4월 28일 이미도 집사 모친(故 백연옥 성도) 소천',
            date: '2025-04-29',
            views: 207,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 4,
            title: '1월 9일 박상원 집사 부친(故 박재도 성도) 소천',
            date: '2025-01-11',
            views: 280,
            likes: 0,
            comments: 0,
            thumbnail: null
        }
    ];

    const itemsPerPage = 10;

    // 교회스케줄 데이터
    const scheduleData = [
        { id: 1, title: '온가족 새날 기도회', date: '2025-12-06', type: 'prayer' },
        { id: 2, title: '창립 14주년 감사예배', date: '2025-12-07', type: 'special' },
        { id: 3, title: '성탄절', date: '2025-12-25', type: 'holiday' },
        { id: 4, title: '송구영신예배', date: '2025-12-31', type: 'special' }
    ];

    // 활성 탭에 따른 데이터 선택
    let currentTabData = [];
    if (activeSubTab === '교회소식') {
        currentTabData = newsData;
    } else {
        // 다른 탭을 위한 데이터는 추후 추가 예정
        currentTabData = [];
    }

    const totalPages = Math.ceil(currentTabData.length / itemsPerPage);

    // 현재 페이지에 표시할 아이템 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = currentTabData.slice(indexOfFirstItem, indexOfLastItem);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search:', searchQuery);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="news-page">
            <div className="news-header">
                <h1 className="news-title">{activeSubTab}</h1>
                <div className="news-divider"></div>
                <p className="news-subtitle">하나님의 사랑으로 세상을 밝히는 빛의교회</p>
            </div>

            {/* Sub Tabs */}
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

            {activeSubTab === '교회스케줄' ? (
                <div className="schedule-container">
                    <ChurchCalendar events={scheduleData} />
                </div>
            ) : (
                <div className="news-list">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <div key={item.id} className="news-item">
                                {item.thumbnail && (
                                    <div className="news-thumbnail">
                                        <img src={item.thumbnail} alt={item.title} />
                                    </div>
                                )}
                                <div className="news-content">
                                    <h3 className="news-item-title">{item.title}</h3>
                                    <div className="news-meta">
                                        <span className="news-date">{item.date}</span>
                                        <span className="news-views">조회수 {item.views}</span>
                                        <span className="news-likes">♡ {item.likes}</span>
                                    </div>
                                </div>
                                <div className="news-comments">
                                    <span className="comment-icon">💬</span>
                                    <span className="comment-count">{item.comments}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="news-empty">
                            <p>등록된 게시물이 없습니다.</p>
                        </div>
                    )}
                </div>
            )}

            {activeSubTab !== '교회스케줄' && (
                <div className="news-footer">
                    {/* ... existing footer ... */}
                    <form className="news-search" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="news-search-input"
                        />
                        <button type="submit" className="news-search-btn">
                            🔍
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
            )}
        </div>
    );
};

export default News;
