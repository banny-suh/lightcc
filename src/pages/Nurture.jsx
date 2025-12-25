import React, { useState } from 'react';
import './Nurture.css';

const nurtureData = {
    '새가족교육': {
        title: '새가족교육',
        description: '빛의교회 새가족교육은 5주 과정으로 빛의교회에 등록하기 원하시는 분은 누구나 이수하셔야 합니다.',
        bgColor: 'linear-gradient(135deg, #7bd39a 0%, #5fc98c 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/nurture-new1.jpg',
            import.meta.env.BASE_URL + 'images/nurture-new2.jpg',
            import.meta.env.BASE_URL + 'images/nurture-new3.jpg',
            import.meta.env.BASE_URL + 'images/nurture-new4.jpg',
            import.meta.env.BASE_URL + 'images/nurture-new5.jpg'
        ],
        target: '빛의교회에 등록을 원하시는 분',
        time: '주일2차 예배 후',
        location: '새가족실',
        materials: [
            { title: 'sample1', content: 'sample1' },
            { title: 'sample2', content: 'sample2' },
            { title: 'sample3', content: 'sample3' },
            { title: 'sample4', content: 'sample4' }
        ]
    },
    '성경공부': {
        title: '성경공부',
        description: '성경을 체계적으로 공부하며 말씀 안에서 성장하는 시간입니다.\n하나님의 말씀을 깊이 있게 배우고 삶에 적용합니다.',
        bgColor: 'linear-gradient(135deg, #7dbcd3 0%, #5fb1c9 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/nurture-bible1.jpg',
            import.meta.env.BASE_URL + 'images/nurture-bible2.jpg',
            import.meta.env.BASE_URL + 'images/nurture-bible3.jpg',
            import.meta.env.BASE_URL + 'images/nurture-bible4.jpg',
            import.meta.env.BASE_URL + 'images/nurture-bible5.jpg'
        ],
        target: '성경공부를 원하시는 모든 분',
        time: '수요일 저녁 7:30',
        location: '본당',
        materials: [
            { title: '창세기', content: '창세기\n공부' },
            { title: '출애굽기', content: '출애굽기\n공부' },
            { title: '신약개론', content: '신약개론\n공부' },
            { title: '요한복음', content: '요한복음\n공부' }
        ]
    }
};

const Nurture = () => {
    const [activeTab, setActiveTab] = useState('새가족교육');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const tabs = Object.keys(nurtureData);
    const currentData = nurtureData[activeTab];

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : currentData.images.length - 1));
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev < currentData.images.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="nurture-page">
            {/* Tab Navigation */}
            <div className="nurture-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`nurture-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Hero Section */}
            <div className="nurture-hero">
                <div className="nurture-hero-inner">
                    <div className="nurture-hero-text">
                        <div className="nurture-category-badge" style={{ backgroundColor: currentData.bgColor.split(',')[1].trim().split(' ')[0] }}>
                            NURTURE
                        </div>
                        <h1 className="nurture-hero-title">{currentData.title}</h1>
                        <p className="nurture-hero-description">{currentData.description}</p>
                    </div>
                </div>

                {/* Editorial Staggered Gallery */}
                <div className="nurture-gallery">
                    {currentData.images.map((image, index) => (
                        <div
                            key={index}
                            className={`nurture-gallery-item item-${index + 1}`}
                            style={{ backgroundImage: `url(${image})` }}
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <div className="image-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Detail Modal */}
            {selectedImageIndex !== null && (
                <div className="image-modal-overlay" onClick={() => setSelectedImageIndex(null)}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="image-modal-close" onClick={() => setSelectedImageIndex(null)}>×</button>

                        <button className="image-modal-nav prev" onClick={handlePrevImage}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <img src={currentData.images[selectedImageIndex]} alt="Full view" className="image-modal-full" />

                        <button className="image-modal-nav next" onClick={handleNextImage}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Info Section */}
            <div className="nurture-info">
                {/* Basic Course */}
                <div className="course-section">
                    <span className="nurture-info-badge">기본과정</span>
                    <div className="course-divider"></div>

                    <div className="course-main-grid">
                        <div className="course-main-card">
                            <h3 className="course-title">상반기 : 성경개관</h3>
                            <p className="course-subtitle">(모세오경, 역사서, 선지서, 신약성경)</p>
                        </div>
                        <div className="course-main-card">
                            <h3 className="course-title">하반기 : 교리교육</h3>
                            <p className="course-subtitle">(사도신경학교, 주기도문학교, 십계명학교, 신앙의 기초)</p>
                        </div>
                    </div>

                    <div className="course-sub-grid">
                        <div className="course-sub-card">일대일 제자 양육</div>
                        <div className="course-sub-card">큐티나눔방</div>
                    </div>
                </div>

                {/* Advanced Course */}
                <div className="course-section">
                    <span className="nurture-info-badge">심화과정</span>
                    <div className="course-divider"></div>

                    <div className="course-advanced-grid">
                        <div className="course-advanced-card">
                            <h3 className="course-advanced-title">하동삶 (6주)</h3>
                        </div>
                        <div className="course-advanced-card">
                            <h3 className="course-advanced-title">양육자반 (14주)</h3>
                        </div>
                        <div className="course-advanced-card">
                            <h3 className="course-advanced-title">영성훈련 (1단계, 2단계)</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Materials Section */}
            <div className="nurture-materials">
                <div className="nurture-materials-header">
                    <span className="materials-badge">교재샘플</span>
                    <h2 className="materials-title">Nurture Materials</h2>
                    <div className="materials-divider"></div>
                </div>
                <div className="materials-grid">
                    {currentData.materials.map((material, index) => (
                        <div key={index} className="material-card">
                            <div className="material-card-accent"></div>
                            <div className="material-image">
                                <div className="material-image-overlay">
                                    <span className="material-image-title">{material.title}</span>
                                </div>
                                <div className="material-cover-content">
                                    {material.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nurture;
