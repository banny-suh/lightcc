import React, { useState, useEffect } from 'react';
import './Mission.css';

const missionData = {
    '국내선교': {
        projects: [
            {
                logo: 'Lightcc',
                title: '생명을 주는 나무',
                description: '매일 이웃을 찾아 건너며 돕는 등독적이며 따뜻한 나눔을 실천합니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_bg1.png`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    '/images/mission_thumb4.png'
                ]
            },
            {
                logo: 'Lightcc Outreach',
                title: 'Good Morning Project',
                description: '매일 아침을 무료로 봉사 있으며 지역과 가정에서 복지 어르신들을 섬깁니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_bg2.png`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    '/images/mission_thumb3.png'
                ],
                reverse: true
            }
        ]
    },
    '해외선교': {
        projects: [
            {
                logo: 'Lightcc Global',
                title: '캄보디아 선교',
                description: '캄보디아 지역 주민들을 위한 의료 봉사와 복음 전파 사역을 진행합니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_bg1.png`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    '/images/mission_thumb2.png'
                ]
            },
            {
                logo: 'Lightcc Mission',
                title: '드림하우스 건축',
                description: '열악한 환경의 가정에 집을 지어주는 사랑의 집짓기 프로젝트입니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_bg2.png`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    '/images/mission_thumb1.png'
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
                bgImage: `${import.meta.env.BASE_URL}images/mission_bg1.png`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    '/images/mission_thumb4.png'
                ]
            },
            {
                logo: 'Lightcc Thursday',
                title: 'Miracle on Thursday',
                description: '매주 목요일 진행되는 기적의 나눔 캠페인입니다.',
                bgImage: `${import.meta.env.BASE_URL}images/mission_bg2.png`,
                images: [
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb4.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb1.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb3.png`,
                    `${import.meta.env.BASE_URL}images/mission_thumb2.png`,
                    '/images/mission_thumb4.png'
                ],
                reverse: true
            }
        ]
    }
};

const Mission = () => {
    const [activeTab, setActiveTab] = useState('국내선교');
    const [sliderIndexes, setSliderIndexes] = useState({});
    const tabs = Object.keys(missionData);
    const currentProjects = missionData[activeTab].projects;

    // Image slider component
    const ImageSlider = ({ images, projectIndex }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const imagesPerView = 4;
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
                    >
                        <div className="project-logo">{project.logo}</div>
                    </div>

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
