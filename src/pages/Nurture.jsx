import React, { useState } from 'react';
import './Nurture.css';

const nurtureData = {
    '새가족교육': {
        title: '새가족교육',
        description: '빛의교회 새가족교육은 5주 과정으로 빛의교회에 등록하기 원하시는 분은 누구나 미숙자여도 합니다.\n이 과정을 통해 신앙의 삶을 새롭게 다지는 시간이 될 것입니다.',
        images: [
            '/images/nurture1.png',
            '/images/nurture2.png',
            '/images/nurture3.png',
            '/images/nurture4.png'
        ],
        target: '빛의교회에 등록을 원하시는 분',
        time: '주일2차 예배 후',
        location: '새가족실',
        materials: [
            { title: '빛의교회를 소개합니다', content: '빛의교회\n소개합니다' },
            { title: '나는 누구인가?', content: '나는\n누구인가?' },
            { title: '예수님은 누구신가?', content: '예수님은\n누구신가?' },
            { title: '구원의 확신 문답', content: '구원의\n확신 문답' }
        ]
    },
    '성경공부': {
        title: '성경공부',
        description: '성경을 체계적으로 공부하며 말씀 안에서 성장하는 시간입니다.\n하나님의 말씀을 깊이 있게 배우고 삶에 적용합니다.',
        images: [
            '/images/nurture2.png',
            '/images/nurture3.png',
            '/images/nurture4.png',
            '/images/nurture1.png'
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
    const tabs = Object.keys(nurtureData);
    const currentData = nurtureData[activeTab];

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
                <h1 className="nurture-hero-title">{currentData.title}</h1>
                <div className="nurture-hero-divider"></div>
                <p className="nurture-hero-description">{currentData.description}</p>

                {/* Image Gallery */}
                <div className="nurture-gallery">
                    {currentData.images.map((image, index) => (
                        <div
                            key={index}
                            className="nurture-gallery-item"
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Info Section */}
            <div className="nurture-info">
                {/* Basic Course */}
                <div className="course-section">
                    <span className="nurture-info-badge">기본과정</span>
                    <div className="course-divider"></div>

                    <div className="course-main-grid">
                        <div className="course-main-card">
                            <h3 className="course-title">상반기 : 성경개관</h3>
                            <p className="course-subtitle">(모세오경, 역사서, 선지서, 사역성경)</p>
                        </div>
                        <div className="course-main-card">
                            <h3 className="course-title">하반기 : 교리교육</h3>
                            <p className="course-subtitle">(사도신정학과, 주기도문학교, 십계명학교, 신앙의 기초)</p>
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
                            <h3 className="course-advanced-title">하동생 (6주)</h3>
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
                <span className="materials-badge">교재안내</span>
                <p className="materials-subtitle">click to view</p>
                <div className="materials-grid">
                    {currentData.materials.map((material, index) => (
                        <div key={index} className="material-card">
                            <div className="material-image">
                                {material.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nurture;
