import React, { useState } from 'react';
import './Intro.css';

const Intro = () => {
    const [activeTab, setActiveTab] = useState('환영인사');
    const [selectedYear, setSelectedYear] = useState('2025년');

    const tabs = ['환영인사', '핵심가치', '섬기는사람들', '교회역사', '오시는길'];

    const renderContent = () => {
        switch (activeTab) {
            case '환영인사':
                return (
                    <div className="intro-welcome">
                        <div className="welcome-container">
                            <div className="welcome-text-content">
                                <div className="welcome-header">
                                    <span className="welcome-label">Pastor's Greeting</span>
                                    <h2 className="welcome-title">하나님은 우리를 <br />교회로 부르셨습니다.</h2>
                                </div>

                                <div className="welcome-body">
                                    <div className="welcome-quote">
                                        "하나님은 우리를 교회로 부르셨고 또한 교회를 통해서 일하십니다."
                                    </div>
                                    <div className="welcome-paragraphs">
                                        <p>교회를 통해서 영혼을 살리고 하나님의 나라를 확장해 갑니다.<br />그래서 교회는 하나님의 방법이며 거룩한 꿈이기도 합니다.</p>
                                        <p>빛의교회는 선교하는 교회로서 세상을 밝히는 것이 우리의 사명입니다.<br />이곳을 통해 하나님을 만나시고 평생의 동역자를 만나<br />하나님의 거룩한 일에 동참하시는 분들이 되기를 바랍니다.</p>
                                    </div>
                                </div>

                                <div className="welcome-signature">
                                    <div className="sig-line"></div>
                                    <div className="sig-details">
                                        <span className="sig-role">담임목사</span>
                                        <span className="sig-name">천정훈 목사</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '핵심가치':
                return (
                    <div className="core-values-refined">
                        <div className="values-header">
                            <span className="values-label">Core Values</span>
                            <h2 className="values-main-title">빛의교회 핵심가치</h2>
                            <p className="values-subtitle">우리는 이 네 가지 가치를 통해 하나님 나라의 거룩한 꿈을 꾸어갑니다.</p>
                        </div>

                        <div className="values-grid">
                            <div className="value-item">
                                <span className="value-number">01</span>
                                <div className="value-text">
                                    <div className="value-titles">
                                        <h3 className="v-en">With God</h3>
                                        <h4 className="v-kr">예배하는 공동체</h4>
                                    </div>
                                    <div className="v-divider"></div>
                                    <p className="v-desc">
                                        우리의 삶에는 해야할 것도 많고 하고 싶은 것들도 많지만 그 가운데 가장 중요한 것은 하나님께 예배드리는 것입니다. 우리는 가는 곳마다 먼저 예배하고, 우리에게 맡겨진 자리에서 예배해야 합니다. 하나님은 이렇게 예배하는 자들을 찾으십니다.
                                    </p>
                                </div>
                            </div>

                            <div className="value-item">
                                <span className="value-number">02</span>
                                <div className="value-text">
                                    <div className="value-titles">
                                        <h3 className="v-en">With the Word</h3>
                                        <h4 className="v-kr">말씀에 순종하는 공동체</h4>
                                    </div>
                                    <div className="v-divider"></div>
                                    <p className="v-desc">
                                        우리 삶의 모든 기준은 말씀이 됩니다. 말씀이 기준이고, 말씀에 순종하며, 말씀의 열매를 맺고 살아가기를 결단합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="value-item">
                                <span className="value-number">03</span>
                                <div className="value-text">
                                    <div className="value-titles">
                                        <h3 className="v-en">With the People</h3>
                                        <h4 className="v-kr">섬기는 공동체</h4>
                                    </div>
                                    <div className="v-divider"></div>
                                    <p className="v-desc">
                                        우리의 관심은 복음을 전하고 하나님의 나라를 확장하는 것에 있습니다. 우리는 우리의 삶도 중요하지만 이웃의 삶을 더 중요하게 여깁니다.
                                    </p>
                                </div>
                            </div>

                            <div className="value-item">
                                <span className="value-number">04</span>
                                <div className="value-text">
                                    <div className="value-titles">
                                        <h3 className="v-en">With the Future</h3>
                                        <h4 className="v-kr">미래를 준비하는 공동체</h4>
                                    </div>
                                    <div className="v-divider"></div>
                                    <p className="v-desc">
                                        복음은 다음 세대로 이어져야 합니다. 우리에게는 성경의 가르침대로 살아가는 삶의 모습을 통해 복음을 이어줘야 할 책임이 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '섬기는사람들':
                return (
                    <div className="staff-section">
                        {/* Senior Pastor Section */}
                        <div className="senior-pastor-section">
                            <div className="senior-pastor-content">
                                <div className="senior-pastor-photo">
                                    <img src={`${import.meta.env.BASE_URL}images/introduction_servers_pastor_jeonghoon.jpg`} alt="천정훈 담임목사" />
                                </div>
                                <div className="senior-pastor-info">
                                    <h2 className="senior-pastor-title">천정훈 담임목사</h2>
                                    <div className="senior-pastor-divider"></div>
                                    <div className="senior-pastor-description">
                                        <p>천정훈 목사는 평생 하나님을 위한 꿈을 꾸고 싶은 사람이다.</p>
                                        <p>교회만이 이 시대의 마지막 대안이라고 굳게 믿으며 사람을 세우는 일에 정성을 다하는 그는,</p>
                                        <p>예수님이 꿈꾸셨던 교회를 세우기 위해서 오늘도 무릎을 꿇는다.</p>
                                        <p>염천교회에서 목회를 시작했고 온누리교회에서 부목사로 섬겼다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Associate Pastors Section */}
                        <div className="staff-category-refined">
                            <div className="staff-category-header">
                                <span className="staff-category-badge">STAFF</span>
                                <h3 className="staff-category-label-new">교역자 소개</h3>
                            </div>

                            <div className="staff-grid-new">
                                <div className="staff-card-new">
                                    <div className="staff-photo-new">
                                        <img src={`${import.meta.env.BASE_URL}images/introduction_servers_pastor_jinseok.jpg`} alt="이진석 목사" />
                                        <div className="staff-photo-overlay"></div>
                                    </div>
                                    <div className="staff-info-new">
                                        <span className="staff-role-new">목사</span>
                                        <h3 className="staff-name-new">이진석 목사</h3>
                                        <div className="staff-line-new"></div>
                                        <p className="staff-description-new">
                                            이진석 목사는 하나님을 경외하며 하나님과 늘 동행하기를 갈망하는 사람이다. 주님 닮기를 소망하며 주님께서 기뻐하실 아름다운 공동체 세우기를 간절히 소망하며 나아간다.
                                        </p>
                                    </div>
                                </div>

                                <div className="staff-card-new">
                                    <div className="staff-photo-new">
                                        <img src={`${import.meta.env.BASE_URL}images/introduction_servers_pastor_seunghyun.jpg`} alt="조승현 목사" />
                                        <div className="staff-photo-overlay"></div>
                                    </div>
                                    <div className="staff-info-new">
                                        <span className="staff-role-new">목사</span>
                                        <h3 className="staff-name-new">조승현 목사</h3>
                                        <div className="staff-line-new"></div>
                                        <p className="staff-description-new">
                                            조승현 목사는 하나님의 나라가 이 땅에 이루어지기를 소망하며 이 땅에서 실현되고 있는 하나님 나라의 기쁨으로 예배드리길 소망하며 나아간다.
                                        </p>
                                    </div>
                                </div>

                                <div className="staff-card-new">
                                    <div className="staff-photo-new">
                                        <img src={`${import.meta.env.BASE_URL}images/introduction_servers_pastor_yechan.jpg`} alt="신예찬 전도사" />
                                        <div className="staff-photo-overlay"></div>
                                    </div>
                                    <div className="staff-info-new">
                                        <span className="staff-role-new">전도사</span>
                                        <h3 className="staff-name-new">신예찬 전도사</h3>
                                        <div className="staff-line-new"></div>
                                        <p className="staff-description-new">
                                            신예찬 전도사는 이름처럼 예수님을 찬양하는 삶을 살아가기 위해 힘쓰는 사람이다. 자신의 뜻을 내려 놓고 하나님의 뜻을 구하는 삶의 예배를 드리기를 소망하며 나아간다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Missionaries Section */}
                        <div className="staff-category-refined no-top-border missionary-section">
                            <div className="staff-category-header">
                                <span className="staff-category-badge">MISSION</span>
                                <h3 className="staff-category-label-new">선교사 소개</h3>
                            </div>

                            <div className="staff-grid-new">
                                <div className="staff-card-new">
                                    <div className="staff-photo-new">
                                        <img src={`${import.meta.env.BASE_URL}images/introduction_servers_missionary_jongryeol.jpg`} alt="케냐 박종렬 선교사" />
                                        <div className="staff-photo-overlay"></div>
                                    </div>
                                    <div className="staff-info-new">
                                        <span className="staff-role-new">케냐</span>
                                        <h3 className="staff-name-new">박종렬 선교사</h3>
                                        <div className="staff-line-new"></div>
                                    </div>
                                </div>

                                <div className="staff-card-new">
                                    <div className="staff-photo-new">
                                        <img src={`${import.meta.env.BASE_URL}images/introduction_servers_missionary_jeongdo.jpg`} alt="케냐 이정도 선교사" />
                                        <div className="staff-photo-overlay"></div>
                                    </div>
                                    <div className="staff-info-new">
                                        <span className="staff-role-new">케냐</span>
                                        <h3 className="staff-name-new">이정도 선교사</h3>
                                        <div className="staff-line-new"></div>
                                    </div>
                                </div>

                                <div className="staff-card-new">
                                    <div className="staff-photo-new">
                                        <img src={`${import.meta.env.BASE_URL}images/introduction_servers_missionary_cheolyong.jpg`} alt="필리핀 박철용 선교사" />
                                        <div className="staff-photo-overlay"></div>
                                    </div>
                                    <div className="staff-info-new">
                                        <span className="staff-role-new">필리핀</span>
                                        <h3 className="staff-name-new">박철용 선교사</h3>
                                        <div className="staff-line-new"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '교회역사':
                const years = ['2025년', '2024년', '2023년', '2022년', '2021년(이전)'];
                const historyData = {
                    '2025년': [
                        { date: '2025. 1. 17(금)', content: '금요일 밤 기도회 시작' },
                        { date: '2025. 1. 21(화) ~ 30(목)', content: "케냐 아웃리치 'Break Through with Faith'" },
                        { date: '2025. 1. 25(토)', content: '1월 생명을 주는 나무 봉사' },
                        { date: '2025. 2. 1(토)', content: '2월 온가족 세벽예배 시작' },//==done
                        { date: '2025. 2', content: '2월 금요성령기도회 / 예언선교 집회' },
                        { date: '2025. 2. 16', content: '서부 아프리카 돌봄 성경 기증' },
                        { date: '2025. 2. 18 ~ 5. 7', content: '하나님과 동행하는 삶 (하동삶)' },
                        { date: '2025. 2. 22', content: '목양 리더십 컨퍼런스' },
                        { date: '2025. 2. 28', content: '2월 생명을 주는 나무 봉사' },
                        { date: '2025. 3. 5', content: '제9회 사순절 특별새벽기도회' },
                        { date: '2025. 3. 16 ~ 4. 30', content: '상반기 부부 성경통독 (LBS 개강)' },
                        { date: '2025. 3. 21 ~ 22', content: '상반기 리더십 컨퍼런스' },
                        { date: '2025. 3. 23', content: 'LIGHT_Family Day 시작' },
                        { date: '2025. 5', content: 'House Worship (하우스 워십)' },
                        { date: '2025. 5', content: 'Welcome Home 축제' },
                        { date: '2025. 5. 8', content: '자녀 훈육과 양육 세미나' }
                    ],
                    '2024년': [
                        { date: '2024. 12. 25', content: '성탄 축하 예배' },
                        { date: '2024. 11. 24', content: '추수감사주일 예배' }
                    ],
                    '2023년': [
                        { date: '2023. 12. 31', content: '송구영신 예배' }
                    ],
                    '2022년': [
                        { date: '2022. 10. 2', content: '교회 창립 기념일' }
                    ],
                    '2021년(이전)': [
                        { date: '2021. 5. 16', content: '교회 개척 및 첫 예배' }
                    ]
                };

                return (
                    <div className="history-section-refined">
                        <div className="history-header">
                            <span className="history-label">CHURCH HISTORY</span>
                            <h2 className="history-title-new">교회 역사</h2>
                            <p className="history-subtitle">빛의교회가 걸어온 은혜의 발걸음입니다.</p>
                        </div>

                        <div className="history-years-new">
                            {years.map(year => (
                                <button
                                    key={year}
                                    className={`year-btn-new ${selectedYear === year ? 'active' : ''}`}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        <div className="history-timeline-new">
                            <div className="timeline-line"></div>
                            {historyData[selectedYear].map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <span className="timeline-date">{item.date}</span>
                                    <div className="timeline-dot"></div>
                                    <p className="timeline-text">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case '오시는길':
                return (
                    <div className="location-section">
                        <div className="location-header">
                            <h2 className="location-title">오시는길</h2>
                            <div className="location-divider"></div>
                        </div>

                        <div className="location-info">
                            <h3 className="location-church-name">빛의교회</h3>
                            <p className="location-address">서울특별시 서초구 서초대로 115</p>
                        </div>

                        <div className="location-contacts">
                            <div className="location-contact-item">
                                <span className="contact-label">TEL</span>
                                <a href="tel:02-532-9826" className="contact-value">02-532-9826</a>
                            </div>
                            <div className="location-contact-item">
                                <span className="contact-label">FAX</span>
                                <span className="contact-value">02-533-9826</span>
                            </div>
                            <div className="location-contact-item">
                                <span className="contact-label">EMAIL</span>
                                <a href="mailto:lightcc-@naver.com" className="contact-value">lightcc-@naver.com</a>
                            </div>
                        </div>

                        <div className="location-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1400.8755329229275!2d126.99281620950927!3d37.4872634611186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1a7ae0bdbd1%3A0x549f69045eae91d1!2z67mb7J2Y6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1766662321554!5m2!1sko!2skr"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="빛의교회 위치"
                            ></iframe>
                        </div>

                        <div className="location-subway">
                            <div className="location-subway-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="8" fill="#6F7C3C" />
                                    <path d="M12 14h16v12H12z" fill="white" />
                                    <circle cx="17" cy="22" r="2" fill="#6F7C3C" />
                                    <circle cx="23" cy="22" r="2" fill="#6F7C3C" />
                                    <path d="M16 14V10h8v4" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="location-subway-text">7호선 : 내방역 8번 출구</div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="intro-page">
            {/* Tab Navigation */}
            <div className="intro-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`intro-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Hero Section - Only show for 환영인사 tab */}
            {activeTab === '환영인사' && (
                <div className="intro-hero">
                    <div className="intro-hero-content">
                        <h1 className="intro-hero-title">
                            Light<br />
                            Community<br />
                            Church
                        </h1>
                        <p className="intro-hero-subtitle">하나님의 사랑으로 세상을 밝히는 빛의교회 <strong>천정훈 목사</strong></p>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className={`intro-content-section ${activeTab === '핵심가치' ? 'no-padding' : ''}`}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Intro;
