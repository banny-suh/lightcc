import React from 'react';
import './Worship.css';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

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
    return (
        <div className="worship-page">
            {/* Hero Section */}
            <div className="worship-hero">
                {/* Background Video */}
                <div className="worship-hero-video">
                    <iframe
                        src="https://www.youtube.com/embed/LpWmmk8GCOI?autoplay=1&mute=1&loop=1&playlist=LpWmmk8GCOI&controls=0&showinfo=0&rel=0&iv_load_policy=3"
                        title="Worship Video Background"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="worship-hero-content">
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
                    <div className="worship-section-header">
                        <span className="section-badge">예배시간</span>
                        <h2 className="worship-section-title">Worship Times</h2>
                        <div className="worship-section-divider"></div>
                    </div>

                    <div className="worship-grid">
                        {worshipSchedule.map((item, index) => (
                            <div key={index} className="worship-card">
                                <div className="worship-card-accent"></div>
                                <h3 className="worship-card-title">{item.title}</h3>
                                <div className="worship-card-info">
                                    <p className="worship-card-time">
                                        <FaClock className="worship-card-icon" />
                                        {item.time}
                                    </p>
                                    <p className="worship-card-location">
                                        <FaMapMarkerAlt className="worship-card-icon" />
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Church School Section */}
                <div className="worship-section">
                    <div className="worship-section-header">
                        <span className="section-badge">교회학교</span>
                        <h2 className="worship-section-title">Church School</h2>
                        <div className="worship-section-divider"></div>
                    </div>

                    <div className="worship-grid">
                        {churchSchool.map((item, index) => (
                            <div key={index} className="worship-card">
                                <div className="worship-card-accent"></div>
                                <h3 className="worship-card-title">{item.title}</h3>
                                <div className="worship-card-info">
                                    <p className="worship-card-time">
                                        <FaClock className="worship-card-icon" />
                                        {item.time}
                                    </p>
                                    <p className="worship-card-location">
                                        <FaMapMarkerAlt className="worship-card-icon" />
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Worship;
