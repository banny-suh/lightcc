import React, { useState, useEffect } from 'react';
import { fetchSermonInfo } from '../apis/homeApi';
import './SermonSection.css';

const SermonSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sermonInfo, setSermonInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSermon = async () => {
            try {
                const info = await fetchSermonInfo();
                setSermonInfo(info);
            } catch (error) {
                console.error('Failed to fetch sermon info:', error);
            } finally {
                setLoading(false);
            }
        };
        loadSermon();
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (loading) {
        return (
            <section className="sermon-section">
                <div className="sermon-container">
                    <div className="sermon-title skeleton" style={{ width: '240px', height: '36px', marginBottom: '40px' }}></div>
                    <div className="video-wrapper skeleton" style={{ height: 'auto', aspectRatio: '16/9', maxWidth: '800px', margin: '0 auto 40px' }}></div>
                </div>
            </section>
        );
    }

    if (!sermonInfo) return null;

    return (
        <section className="sermon-section">
            <div className="sermon-container">
                <h2 className="sermon-title">{sermonInfo.title}</h2>

                <div className="video-wrapper" onClick={openModal}>
                    {/* Thumbnail View */}
                    <img src={sermonInfo.thumbnail} alt="Sermon Thumbnail" className="video-thumbnail" />

                    <div className="thumbnail-overlay">
                        <div className="thumbnail-text-top">
                            LIGHT<br />
                            community<br />
                            church
                        </div>
                        <div className="thumbnail-text-url">WWW.LIGHTCC.NET</div>

                        <div className="thumbnail-main-text">WEEKLY SERMONS</div>
                        <div className="thumbnail-large-text">LIGHT</div>

                        <div className="play-button"></div>
                    </div>
                </div>

                <a
                    href={sermonInfo.moreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-button"
                >
                    주일설교 더보기
                </a>
            </div>

            {/* Video Modal */}
            {isModalOpen && (
                <div className="sermon-modal" onClick={closeModal}>
                    <div className="sermon-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="sermon-modal-close" onClick={closeModal}>&times;</button>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`${sermonInfo.videoUrl}?autoplay=1`}
                            title="Sunday Sermon"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SermonSection;
