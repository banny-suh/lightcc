import React, { useState, useEffect } from 'react';
import { fetchBulletins } from '../../apis/bulletinApi';
import BulletinModal from '../../components/BulletinModal';

const ChurchBulletin = ({ currentPage, itemsPerPage }) => {
    const [bulletinData, setBulletinData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedBulletin, setSelectedBulletin] = useState(null);

    useEffect(() => {
        if (bulletinData.length === 0) {
            setIsLoading(true);
            fetchBulletins()
                .then(data => {
                    setBulletinData(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Failed to fetch bulletins:', error);
                    setIsLoading(false);
                });
        }
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bulletinData.slice(indexOfFirstItem, indexOfLastItem);

    const handleBulletinClick = (bulletin) => {
        setSelectedBulletin(bulletin);
    };

    const handleCloseModal = () => {
        setSelectedBulletin(null);
    };

    return (
        <>
            <div className="event-gallery-container">
                {isLoading ? (
                    <div className="news-empty">
                        <p>로딩 중...</p>
                    </div>
                ) : (
                    <div className="event-gallery-grid">
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="event-gallery-item"
                                    onClick={() => handleBulletinClick(item)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="event-image">
                                        {/* Show first page as thumbnail */}
                                        <img src={item.pages[0]} alt={item.title} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="news-empty">
                                <p>등록된 주보가 없습니다.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bulletin Modal */}
            {selectedBulletin && (
                <BulletinModal
                    bulletins={bulletinData}
                    initialIndex={bulletinData.findIndex(b => b.id === selectedBulletin.id)}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default ChurchBulletin;
