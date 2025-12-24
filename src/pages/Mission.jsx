import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Mission.css';

const missionData = {
    '국내선교': {
        projects: [
            {
                logo: 'Lightcc',
                title: '생명을 주는 나무',
                description: '매달 마음을 모아 간식과 반찬 등을 지원하며 미혼모 자녀들을 섬기는 사역입니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_domestic_bg1.jpg`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                ]
            },
            {
                logo: 'Lightcc Outreach',
                title: 'Good Morning Project',
                description: '매달 유제품 지원을 통해 삼성동 지역에 거주하시는 독거 어르신들을 섬기는 사역입니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_domestic_bg2.jpg`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                ],
                reverse: true
            }
        ]
    },
    '해외선교': {
        projects: [
            {
                logo: 'Lightcc Global',
                title: '드림박스 선교회',
                description: '하나님의 사랑으로 세상을 이롭게 하는 꿈을 가진 선교 공동체입니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_overseas_bg1.jpg`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                ]
            },
            {
                logo: 'Lightcc Mission',
                title: '해외 선교 사역(케냐, 레바논, 필리핀)',
                description: '드림박스 선교회를 통해 해외에서 진행되고 있는 사역입니다',
                bgImage: `${import.meta.env.BASE_URL}images/mission_overseas_bg2.jpg`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                ],
                reverse: true
            }
        ]
    },
    '캠페인': {
        projects: [
            {
                logo: 'Lightcc Campaign',
                title: 'Walking for Miracle',
                description: '매년 진행되는 걷기 대회를 통해 이웃 사랑을 실천합니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_campaign_bg1.jpg`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                ]
            },
            {
                logo: 'Lightcc Thursday',
                title: 'Miracle on Thursday',
                description: '매주 목요일 진행되는 기적의 나눔 캠페인입니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_campaign_bg2.jpg`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                ],
                reverse: true
            }
        ]
    }
};

const Mission = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('국내선교');

    useEffect(() => {
        if (location.state && location.state.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location.state]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    const tabs = Object.keys(missionData);
    const currentProjects = missionData[activeTab].projects;

    // Image slider component
    const ImageSlider = ({ images, projectIndex }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const imagesPerView = 6;
        const maxIndex = Math.max(0, Math.ceil(images.length / imagesPerView) - 1);

        useEffect(() => {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
            }, 4000);

            return () => clearInterval(timer);
        }, [maxIndex]);

        const goToNext = () => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        };

        const goToPrev = () => {
            setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
        };

        return (
            <div className="slider-container">
                <button className="slider-btn slider-btn-prev" onClick={goToPrev}>
                    ‹
                </button>
                <div className="slider-viewport">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: Math.ceil(images.length / imagesPerView) }).map((_, pageIndex) => (
                            <div key={pageIndex} className="slider-page">
                                {images.slice(pageIndex * imagesPerView, (pageIndex + 1) * imagesPerView).map((image, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className="project-gallery-item"
                                        style={{ backgroundImage: `url(${image})` }}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <button className="slider-btn slider-btn-next" onClick={goToNext}>
                    ›
                </button>
                <div className="slider-indicators">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            className={`slider-indicator ${currentIndex === idx ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="mission-page">
            {/* Tab Navigation */}
            <div className="mission-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`mission-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Project Sections */}
            {currentProjects.map((project, index) => (
                <div key={index}>
                    {/* Hero Section */}
                    <div
                        className="project-hero"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    />

                    {/* Content Section */}
                    <div className="project-content-section">
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <ImageSlider images={project.images} projectIndex={index} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Mission;
