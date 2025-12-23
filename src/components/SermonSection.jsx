import React from 'react';
import { Link } from 'react-router-dom';
import './SermonSection.css';

const SermonSection = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="sermon-section">
            <div className="sermon-container">
                <h2 className="sermon-title">주일예배설교</h2>

                <div className="video-wrapper" onClick={openModal}>
                    {/* Thumbnail View */}
                    <img src={`${import.meta.env.BASE_URL}images/sermon_thumb.png`} alt="Sermon Thumbnail" className="video-thumbnail" />

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
                    href="https://www.youtube.com/playlist?list=PLb5IL80VvnmxMVgz1wzTuttlCCSqVxnJw"
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
                            src="https://www.youtube.com/embed/LpWmmk8GCOI?autoplay=1"
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
