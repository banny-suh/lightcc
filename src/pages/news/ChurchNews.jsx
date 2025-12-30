import React from 'react';

const ChurchNews = ({ newsData, currentPage, itemsPerPage }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="news-list-container">
            <div className="news-list">
                {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                        <div key={item.id} className="news-item">
                            <div className="news-thumbnail">
                                {item.thumbnail ? (
                                    <img src={item.thumbnail} alt={item.title} />
                                ) : (
                                    <div className="news-thumbnail-placeholder">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="news-content">
                                <h3 className="news-item-title">{item.title}</h3>
                                <div className="news-meta">
                                    <span className="news-date">{item.createdAt}</span>
                                    <span className="news-views">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        {item.views}
                                    </span>
                                    <span className="news-likes">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                        {item.likes}
                                    </span>
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
        </div>
    );
};

export default ChurchNews;
