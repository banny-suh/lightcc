import React from 'react';
import { Link } from 'react-router-dom';
import './Worship.css';

const worshipSchedule = [
    { title: '주일1부예배', time: '오전 9:00', location: '본당' },
    { title: '주일2부예배', time: '오전 11:00', location: '본당' },
    { title: '주일3부예배', time: '오후 2:00', location: '본당' },
    { title: '새벽예배', time: '오전 6:00', location: '본당' },
    { title: '수요오전예배', time: '오전 10:30', location: '본당' },
    { title: '금밤기도회', time: '매월 두 번째 금요일 오후 8:00', location: '본당' },
];

const churchSchool = [
    { title: '엘키즈(유아유치부)', time: '오전 11:00', location: '3층' },
    { title: '엘키즈(초등부)', time: '오전 11:00', location: '5층' },
    { title: '엘틴즈(청소년부)', time: '오전 9:00', location: '5층' },
];

const Worship = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="worship-page">
            {/* Hero Section */}
            <div
                className="worship-hero"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/sermon_bg.jpg)` }}
            >
                <div className="worship-hero-content">
                    <div className="worship-play-icon" onClick={openModal}>▶</div>
                    <h1 className="worship-hero-title">주일예배설교</h1>
                    <div className="worship-hero-divider"></div>
                    <p className="worship-hero-subtitle">천정훈 목사</p>
                    <a
                        href="https://www.youtube.com/playlist?list=PLb5IL80VvnmxMVgz1wzTuttlCCSqVxnJw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="worship-hero-button"
                    >
                        주일설교 더보기
                    </a>
                </div>
            </div>

            {/* Worship Times Section */}
            <div className="worship-content">
                <div className="worship-section">
                    <span className="section-badge">예배시간</span>
                    <div className="worship-grid">
                        {worshipSchedule.map((item, index) => (
                            <div key={index} className="worship-card">
                                <h3 className="worship-card-title">{item.title}</h3>
                                <p className="worship-card-time">{item.time}</p>
                                <p className="worship-card-location">{item.location}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Church School Section */}
                <div className="worship-section">
                    <span className="section-badge">교회학교</span>
                    <div className="worship-grid">
                        {churchSchool.map((item, index) => (
                            <div key={index} className="worship-card">
                                <h3 className="worship-card-title">{item.title}</h3>
                                <p className="worship-card-time">{item.time}</p>
                                <p className="worship-card-location">{item.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && (
                <div className="worship-modal" onClick={closeModal}>
                    <div className="worship-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="worship-modal-close" onClick={closeModal}>&times;</button>
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
        </div>
    );
};

export default Worship;
