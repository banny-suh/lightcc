import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
    return (
        <section className="mission-section">
            <div className="mission-container">
                <div className="mission-grid">
                    {/* Left Side - Main Image */}
                    <div
                        className="mission-main-image"
                        style={{ backgroundImage: 'url(/images/mission_main.png)' }}
                    >
                        <div className="mission-badge">
                            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#5d7c89' }}>
                                WALKING<br />
                                <span style={{ fontSize: '0.65rem' }}>ON THE ROAD</span>
                            </div>
                        </div>
                        <div className="mission-caption">
                            본교회를 떠나
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="mission-right">
                        {/* Text Box */}
                        <div className="mission-text-box">
                            <h2>
                                하나님의 사랑으로<br />
                                세상을 밝히는 빛의교회!
                            </h2>
                            <p>
                                빛의교회는 선교하는 교회입니다. 세상을 밝히는 것이 우리의 사명입니다.
                                빛의교회는 복음으로 세상의 아픔을 만나고 복음의 능력으로 세상을 치유합니다.
                            </p>
                        </div>

                        {/* Video Thumbnail */}
                        <div
                            className="mission-video"
                            style={{ backgroundImage: 'url(/images/mission_video.png)' }}
                        >
                            <div className="video-play-icon">▶</div>
                            <div className="video-title">넉넉F로젝트</div>
                        </div>

                        {/* Mission Cards */}
                        <div className="mission-cards">
                            <div
                                className="mission-card"
                                style={{ backgroundImage: 'url(/images/mission_domestic.png)' }}
                            >
                                <div className="mission-card-content">
                                    <div className="mission-card-title">국내선교</div>
                                    <div className="mission-card-description">
                                        생명을 누는 날 / GOCIA Morning Project
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mission-card"
                                style={{ backgroundImage: 'url(/images/mission_overseas.png)' }}
                            >
                                <div className="mission-card-content">
                                    <div className="mission-card-title">해외선교</div>
                                    <div className="mission-card-description">
                                        드림하우스건축 / 캄보디아노동력봉사단
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mission-card"
                                style={{ backgroundImage: 'url(/images/mission_campaign.png)' }}
                            >
                                <div className="mission-card-content">
                                    <div className="mission-card-title">캠페인</div>
                                    <div className="mission-card-description">
                                        Walking for Miracle / Miracle on Thursday
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
