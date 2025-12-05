import React, { useState } from 'react';
import './News.css';

const News = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState('교회소식');

    const subTabs = [
        '교회소식',
        '교회주보',
        '교회행사',
        '연금안내',
        '교회스케줄',
        '기도요청',
        '심방요청',
        '차량등록',
        '하동실 신청',
        '영상촬영 피싱 신청',
        '오늘의기도'
    ];

    // 샘플 뉴스 데이터
    const newsData = [
        {
            id: 1,
            title: '故 박완서 집사 소천',
            category: '교회소식',
            date: '2025-09-21',
            views: 137,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 2,
            title: '5월 26일 쁘 유배송 집사 (강금숙 권사의 부군, 지녀 유도형) 소천',
            category: '교회소식',
            date: '2025-05-27',
            views: 223,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 3,
            title: '2025년 5월은 Welcome home',
            category: '교회행사',
            date: '2025-05-13',
            views: 259,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 4,
            title: '4월 28일 이미도 집사 모신(故 백연옥 성도) 소천',
            category: '교회소식',
            date: '2025-04-29',
            views: 207,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 5,
            title: '2025 고난주간 특별집회 \'십자가를 알까지고\'',
            category: '교회행사',
            date: '2025-04-04',
            views: 247,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 6,
            title: '2025 상반기 LBS 개강',
            category: '교회행사',
            date: '2025-03-18',
            views: 175,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 7,
            title: '2025 케냐 아웃리치',
            category: '교회행사',
            date: '2025-01-21',
            views: 306,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 8,
            title: '1월 9일 박상원 집사 부친(故 박재도 성도) 소천',
            category: '교회소식',
            date: '2025-01-11',
            views: 280,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 9,
            title: '[케네이오프라인] 꿈꾸는 운동장 기증 가이드',
            category: '기도요청',
            date: '2024-12-27',
            views: 389,
            likes: 0,
            comments: 0,
            thumbnail: null
        },
        {
            id: 10,
            title: '2025 신년 특별 새벽예배',
            category: '교회행사',
            date: '2024-12-22',
            views: 307,
            likes: 2,
            comments: 0,
            thumbnail: null
        },
        {
            id: 11,
            title: '12월 셋째주 주보',
            category: '교회주보',
            date: '2024-12-15',
            views: 450,
            likes: 5,
            comments: 2,
            thumbnail: null
        },
        {
            id: 12,
            title: '2025년 연금 납부 안내',
            category: '연금안내',
            date: '2024-12-10',
            views: 320,
            likes: 3,
            comments: 1,
            thumbnail: null
        },
        {
            id: 13,
            title: '교회 주차장 이용 안내',
            category: '교회시설물',
            date: '2024-12-05',
            views: 280,
            likes: 1,
            comments: 0,
            thumbnail: null
        },
        {
            id: 14,
            title: '새벽기도 심방 요청',
            category: '심방요청',
            date: '2024-12-01',
            views: 195,
            likes: 2,
            comments: 3,
            thumbnail: null
        },
        {
            id: 15,
            title: '교회 차량 등록 신청서',
            category: '차량등록',
            date: '2024-11-28',
            views: 210,
            likes: 0,
            comments: 0,
            thumbnail: null
        }
    ];

    const itemsPerPage = 10;

    // 활성 탭에 따른 뉴스 필터링
    const filteredNews = newsData.filter(news => news.category === activeSubTab);
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

    // 현재 페이지에 표시할 뉴스 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

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
                <h1 className="news-title">교회소식</h1>
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

            <div className="news-list">
                {currentNews.length > 0 ? (
                    currentNews.map((news) => (
                        <div key={news.id} className="news-item">
                            {news.thumbnail && (
                                <div className="news-thumbnail">
                                    <img src={news.thumbnail} alt={news.title} />
                                </div>
                            )}
                            <div className="news-content">
                                <h3 className="news-item-title">{news.title}</h3>
                                <div className="news-meta">
                                    <span className="news-category">{news.category}</span>
                                    <span className="news-date">{news.date}</span>
                                    <span className="news-views">조회수 {news.views}</span>
                                    <span className="news-likes">♡ {news.likes}</span>
                                </div>
                            </div>
                            <div className="news-comments">
                                <span className="comment-icon">💬</span>
                                <span className="comment-count">{news.comments}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="news-empty">
                        <p>등록된 게시물이 없습니다.</p>
                    </div>
                )}
            </div>

            <div className="news-footer">
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
        </div>
    );
};

export default News;
