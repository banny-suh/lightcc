import React, { useState, useEffect } from 'react';
import { fetchEventGallery } from '../../apis/eventApi';

const ChurchEvents = ({ currentPage, itemsPerPage }) => {
    const [eventGalleryData, setEventGalleryData] = useState([]);
    const [isLoadingEvents, setIsLoadingEvents] = useState(false);

    useEffect(() => {
        if (eventGalleryData.length === 0) {
            setIsLoadingEvents(true);
            fetchEventGallery()
                .then(data => {
                    setEventGalleryData(data);
                    setIsLoadingEvents(false);
                })
                .catch(error => {
                    console.error('Failed to fetch event gallery:', error);
                    setIsLoadingEvents(false);
                });
        }
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = eventGalleryData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="event-gallery-container">
            {isLoadingEvents ? (
                <div className="news-empty">
                    <p>로딩 중...</p>
                </div>
            ) : (
                <div className="event-gallery-grid">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <div key={item.id} className="event-gallery-item">
                                <div className="event-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="news-empty">
                            <p>등록된 행사가 없습니다.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChurchEvents;
