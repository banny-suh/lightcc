import React from 'react';
import { Link } from 'react-router-dom';
import './SermonSection.css';

const SermonSection = () => {
    return (
        <section className="sermon-section">
            <div className="sermon-container">
                <h2 className="sermon-title">주일예배설교</h2>

                <div className="video-wrapper">
                    {/* In a real app, this would be a video player or thumbnail */}
                    <img src="/images/sermon_thumb.png" alt="Sermon Thumbnail" className="video-thumbnail" />

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

                <Link to="/worship" className="more-button">
                    주일설교 더보기
                </Link>
            </div>
        </section>
    );
};

export default SermonSection;
