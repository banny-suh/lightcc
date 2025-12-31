import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchGalleryData } from '../apis/galleryApi';
import BulletinModal from './BulletinModal';
import PrayerDetailModal from './PrayerDetailModal';
import { formatDate } from '../utils/dateUtils';
import './GallerySection.css';

const GallerySection = () => {
    const [data, setData] = useState({
        posters: [],
        bulletins: [],
        prayers: []
    });
    const [loading, setLoading] = useState(true);
    const [activeBulletin, setActiveBulletin] = useState(null);
    const [activePrayer, setActivePrayer] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const apiData = await fetchGalleryData();
                setData(apiData);
            } catch (error) {
                console.error('Failed to fetch gallery data:', error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) {
        return (
            <section className="gallery-section">
                <div className="gallery-container">
                    <div className="poster-carousel">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="poster-item skeleton" style={{ minWidth: '250px', height: '350px' }}></div>
                        ))}
                    </div>
                    <div className="lists-container">
                        {[1, 2].map(i => (
                            <div key={i} className="list-column">
                                <div className="list-header skeleton" style={{ width: '120px', height: '30px', marginBottom: '20px' }}></div>
                                {[1, 2, 3, 4].map(j => (
                                    <div key={j} className="skeleton" style={{ width: '100%', height: '50px', marginBottom: '10px' }}></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="gallery-section">
            <div className="gallery-container">
                {/* Poster Carousel */}
                <div className="poster-carousel">
                    {data.posters.map((poster, index) => (
                        <div
                            key={index}
                            className="poster-item"
                            style={{ backgroundImage: `url(${poster})` }}
                        ></div>
                    ))}
                </div>

                {/* Lists Section */}
                <div className="lists-container">
                    {/* Church Bulletin */}
                    <div className="list-column">
                        <div className="list-header">
                            <span className="list-title">교회주보</span>
                        </div>
                        <ul className="list-items">
                            {data.bulletins.map((item, index) => (
                                <li
                                    key={index}
                                    className="list-item"
                                    onClick={() => setActiveBulletin(item)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span className="list-item-title">
                                        {item.title}
                                        {item.isNew && <span className="new-badge">N</span>}
                                    </span>
                                    <span className="list-item-date">{formatDate(item.createdAt)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Today's Prayer */}
                    <div className="list-column">
                        <div className="list-header">
                            <span className="list-title">오늘의 기도</span>
                        </div>
                        <ul className="list-items">
                            {data.prayers.map((item, index) => (
                                <li
                                    key={index}
                                    className="list-item"
                                    onClick={() => setActivePrayer(item)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span className="list-item-title">
                                        {item.title}
                                        {item.isNew && <span className="new-badge">N</span>}
                                    </span>
                                    <span className="list-item-date">{formatDate(item.createdAt)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {activeBulletin !== null && (
                <BulletinModal
                    bulletins={data.bulletins}
                    initialIndex={data.bulletins.findIndex(b => b.id === activeBulletin.id)}
                    onClose={() => setActiveBulletin(null)}
                />
            )}

            {activePrayer && (
                <PrayerDetailModal
                    prayer={activePrayer}
                    onClose={() => setActivePrayer(null)}
                />
            )}
        </section>
    );
};

export default GallerySection;
