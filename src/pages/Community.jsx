import React, { useState, useEffect } from 'react';
import './Community.css';

const communityData = {
    '유아유치부': {
        title: 'L-Kids 유아유치부',
        description: '2~9개월부터 7세 이하 어린이들이 함께 모여 행복하게 예배를 드리는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #ffb700 0%, #ffa500 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community1.png',
            import.meta.env.BASE_URL + 'images/community2.png',
            import.meta.env.BASE_URL + 'images/community3.png',
            import.meta.env.BASE_URL + 'images/community4.png',
            import.meta.env.BASE_URL + 'images/community5.png'
        ],
        target: '2~9개월~7세',
        time: '주일 오전 11:00',
        location: '3층 유아유치부실'
    },
    '초등부': {
        title: 'L-Kids 초등부',
        description: '초등학교 1학년부터 6학년까지의 어린이들이 함께 모여 예배하는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #ffb700 0%, #ffa500 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community2.png',
            import.meta.env.BASE_URL + 'images/community3.png',
            import.meta.env.BASE_URL + 'images/community4.png',
            import.meta.env.BASE_URL + 'images/community5.png',
            import.meta.env.BASE_URL + 'images/community1.png'
        ],
        target: '초등학교 1~6학년',
        time: '주일 오전 11:00',
        location: '5층 초등부실'
    },
    '틴즈': {
        title: 'L-Teens 청소년부',
        description: '중고등학생들이 함께 모여 말씀과 찬양으로 예배하는 청소년 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #ffb700 0%, #ffa500 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community3.png',
            import.meta.env.BASE_URL + 'images/community4.png',
            import.meta.env.BASE_URL + 'images/community5.png',
            import.meta.env.BASE_URL + 'images/community1.png',
            import.meta.env.BASE_URL + 'images/community2.png'
        ],
        target: '중·고등학생',
        time: '주일 오전 9:00',
        location: '5층 청소년부실'
    },
    'A.시니어': {
        title: 'A.시니어',
        description: '은퇴하신 어르신들이 함께 모여 교제하며 신앙을 나누는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community4.png',
            import.meta.env.BASE_URL + 'images/community5.png',
            import.meta.env.BASE_URL + 'images/community1.png',
            import.meta.env.BASE_URL + 'images/community2.png',
            import.meta.env.BASE_URL + 'images/community3.png'
        ],
        target: '65세 이상',
        time: '주일 오전 11:00',
        location: '4층 시니어실'
    },
    'B.임팩트': {
        title: 'B.임팩트',
        description: '청년들이 함께 모여 신앙과 삶을 나누며 성장하는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community5.png',
            import.meta.env.BASE_URL + 'images/community1.png',
            import.meta.env.BASE_URL + 'images/community2.png',
            import.meta.env.BASE_URL + 'images/community3.png',
            import.meta.env.BASE_URL + 'images/community4.png'
        ],
        target: '20~30대 청년',
        time: '주일 오후 2:00',
        location: '6층 청년부실'
    },
    'C.에너지': {
        title: 'C.에너지',
        description: '열정과 에너지가 넘치는 장년 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community1.png',
            import.meta.env.BASE_URL + 'images/community3.png',
            import.meta.env.BASE_URL + 'images/community5.png',
            import.meta.env.BASE_URL + 'images/community2.png',
            import.meta.env.BASE_URL + 'images/community4.png'
        ],
        target: '40~50대',
        time: '주일 오전 11:00',
        location: '본당'
    },
    'D.무브먼트': {
        title: 'D.무브먼트',
        description: '함께 움직이며 신앙을 실천하는 활동적인 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community2.png',
            import.meta.env.BASE_URL + 'images/community4.png',
            import.meta.env.BASE_URL + 'images/community1.png',
            import.meta.env.BASE_URL + 'images/community5.png',
            import.meta.env.BASE_URL + 'images/community3.png'
        ],
        target: '전 연령',
        time: '주일 오후 3:00',
        location: '체육관'
    }
};

const Community = () => {
    const [activeTab, setActiveTab] = useState('유아유치부');
    const tabs = Object.keys(communityData);
    const currentData = communityData[activeTab];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    return (
        <div className="community-page">
            {/* Tab Navigation */}
            <div className="community-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`community-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Hero Section */}
            <div className="community-hero">
                <div className="community-hero-inner">
                    <div className="community-hero-text">
                        <div className="community-category-badge" style={{ backgroundColor: currentData.bgColor.split(',')[1].trim().split(' ')[0] }}>
                            COMMUNITY
                        </div>
                        <h1 className="community-hero-title">{currentData.title}</h1>
                        <p className="community-hero-description">{currentData.description}</p>
                    </div>
                </div>

                {/* Adjusted Image Gallery - Editorial Style */}
                <div className="community-gallery">
                    {currentData.images.map((image, index) => (
                        <div
                            key={index}
                            className={`community-gallery-item item-${index + 1}`}
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <div className="image-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Info Section */}
            <div key={`${activeTab}-info`} className="community-info">
                <span className="info-badge">예배안내</span>
                <div className="community-info-grid">
                    <div className="community-info-card">
                        <h3 className="info-card-title">대상</h3>
                        <p className="info-card-value">{currentData.target}</p>
                    </div>
                    <div className="community-info-card">
                        <h3 className="info-card-title">시간</h3>
                        <p className="info-card-value">{currentData.time}</p>
                    </div>
                    <div className="community-info-card">
                        <h3 className="info-card-title">장소</h3>
                        <p className="info-card-value">{currentData.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
