import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MissionSection.css';

const MissionSection = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMissionClick = (tab) => {
        navigate('/mission', { state: { activeTab: tab } });
    };

    return (
        <section className="mission-section">
            <div className="mission-container">
                <div className="mission-grid">
                    {/* Left Column (2fr) */}
                    <div className="mission-left">
                        {/* Main Image */}
                        <div
                            className="mission-main-image"
                            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/w4m.jpg)` }}
                        />

                        {/* Cards Row (Domestic + Overseas) */}
                        <div className="mission-cards-row">
                            <div
                                className="mission-card"
                                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/mission_domestic.jpg)` }}
                                onClick={() => handleMissionClick('국내선교')}
                            >
                                <div className="mission-card-content">
                                    <div className="mission-card-title">국내선교</div>
                                    <div className="mission-card-description">
                                        생명을 주는 나무 / Good Morning Project
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mission-card"
                                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/mission_overseas.jpg)` }}
                                onClick={() => handleMissionClick('해외선교')}
                            >
                                <div className="mission-card-content">
                                    <div className="mission-card-title">해외선교</div>
                                    <div className="mission-card-description">
                                        드림하우스건축 / 캄보디아노동력봉사단
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (1fr) */}
                    <div className="mission-right">
                        {/* Text Box */}
                        <div className="mission-text-box">
                            <h2>
                                하나님의 사랑으로<br />
                                세상을 밝히는 빛의교회!
                            </h2>
                            <p>빛의교회는 선교하는 교회로서 세상을 밝히는 것이</p>
                            <p>우리의 사명입니다. 빛의교회를 통해서 하나님을 만나시고</p>
                            <p>평생의 동역자를 만나시고 하나님의 일에 동참하시는 분들이</p>
                            <p>되기를 바랍니다.</p>
                            <p><br /></p>
                            <p>환영인사 》</p>
                        </div>

                        {/* Video Thumbnail */}
                        <div
                            className="mission-video"
                            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/knock_img.jpg)` }}
                            onClick={openModal}
                        >
                            <div className="video-play-icon">▶</div>
                            <div className="video-title">넉넉 프로젝트</div>
                        </div>

                        {/* Card 3 (Campaign) */}
                        <div
                            className="mission-card"
                            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/mission_campaign.jpg)` }}
                            onClick={() => handleMissionClick('캠페인')}
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

            {/* Video Modal */}
            {isModalOpen && (
                <div className="mission-modal" onClick={closeModal}>
                    <div className="mission-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="mission-modal-close" onClick={closeModal}>&times;</button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/zYY2uMo2AQQ?autoplay=1"
                            title="Mission Video"
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

export default MissionSection;
