import React, { useState, useEffect } from 'react';
import './Community.css';

const communityData = {
    '유아유치부': {
        title: 'L-Kids 유아유치부',
        description: '29개월부터 7세 이하 어린이들이 함께 모여 행복하게 예배를 드리는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #ffb700 0%, #ffa500 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community-lkids1.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids2.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids3.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids4.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids5.jpg'
        ],
        target: '29개월~7세',
        time: '주일 오전 11:00',
        location: '3층 유아유치부실'
    },
    '초등부': {
        title: 'L-Kids 초등부',
        description: '초등학교 1학년부터 6학년까지의 어린이들이 함께 모여 예배하는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #ffb700 0%, #ffa500 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community-lkids-el1.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids-el2.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids-el3.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids-el4.jpg',
            import.meta.env.BASE_URL + 'images/community-lkids-el5.jpg'
        ],
        target: '8~12세',
        time: '주일 오전 11:00',
        location: '5층 소예배실'
    },
    '틴즈': {
        title: 'L-Teens 청소년부',
        description: '중고등학생들이 함께 모여 말씀과 찬양으로 예배하는 청소년 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #ffb700 0%, #ffa500 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community-lteens1.jpg',
            import.meta.env.BASE_URL + 'images/community-lteens2.jpg',
            import.meta.env.BASE_URL + 'images/community-lteens3.jpg',
            import.meta.env.BASE_URL + 'images/community-lteens4.jpg',
            import.meta.env.BASE_URL + 'images/community-lteens5.jpg'
        ],
        target: '13~19세',
        time: '주일 오전 9:00',
        location: '5층 소예배실'
    },
    'A.시니어': {
        title: 'A.시니어',
        description: '은퇴하신 어르신들이 함께 모여 교제하며 신앙을 나누는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community-senior1.jpg',
            import.meta.env.BASE_URL + 'images/community-senior2.jpg',
            import.meta.env.BASE_URL + 'images/community-senior3.jpg',
            import.meta.env.BASE_URL + 'images/community-senior4.jpg',
            import.meta.env.BASE_URL + 'images/community-senior5.jpg'
        ],
        target: '',
        time: '매월 셋째 주일 2부 예배 후',
        location: '5층 소예배실'
    },
    'B.임팩트': {
        title: 'B.임팩트',
        description: '청년들이 함께 모여 신앙과 삶을 나누며 성장하는 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community-bridgeimpact1.jpg',
            import.meta.env.BASE_URL + 'images/community-bridgeimpact2.jpg',
            import.meta.env.BASE_URL + 'images/community-bridgeimpact3.jpg',
            import.meta.env.BASE_URL + 'images/community-bridgeimpact4.jpg',
            import.meta.env.BASE_URL + 'images/community-bridgeimpact5.jpg'
        ],
        target: '30~50대 부부',
        time: '예배 후',
        location: '3층 생명나무'
    },
    'C.에너지': {
        title: 'C.에너지',
        description: '열정과 에너지가 넘치는 장년 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community-energy1.jpg',
            import.meta.env.BASE_URL + 'images/community-energy2.jpg',
            import.meta.env.BASE_URL + 'images/community-energy3.jpg',
            import.meta.env.BASE_URL + 'images/community-energy4.jpg',
            import.meta.env.BASE_URL + 'images/community-energy5.jpg'
        ],
        target: '30~40대 싱글',
        time: '예배 후',
        location: '2층 그루터기'
    },
    'D.무브먼트': {
        title: 'D.무브먼트',
        description: '함께 움직이며 신앙을 실천하는 활동적인 공동체입니다.',
        bgColor: 'linear-gradient(135deg, #7bd3c8 0%, #5fc9bc 100%)',
        images: [
            import.meta.env.BASE_URL + 'images/community-movement1.jpg',
            import.meta.env.BASE_URL + 'images/community-movement2.jpg',
            import.meta.env.BASE_URL + 'images/community-movement3.jpg',
            import.meta.env.BASE_URL + 'images/community-movement4.jpg',
            import.meta.env.BASE_URL + 'images/community-movement5.jpg'
        ],
        target: '20~30대 초반',
        time: '예배 후',
        location: '2층 꿈터'
    }
};

const Community = () => {
    const [activeTab, setActiveTab] = useState('유아유치부');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const tabs = Object.keys(communityData);
    const currentData = communityData[activeTab];

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : currentData.images.length - 1));
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev < currentData.images.length - 1 ? prev + 1 : 0));
    };

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
