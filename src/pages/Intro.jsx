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
                    <div className="intro-content">
                        <h2 className="intro-section-title">하나님은</h2>
                        <div className="intro-text-block">
                            <p>우리를 교회로 부르셨고</p>
                            <p>또한 교회를 통해서 일하십니다.</p>
                        </div>
                        <div className="intro-text-block">
                            <p>교회를 통해서 영혼을 살리고</p>
                            <p>교회를 통해서 복음을 전하고</p>
                            <p>교회를 통해서 하나님의 나라를 확장해 갑니다.</p>
                        </div>
                        <div className="intro-text-block">
                            <p>그래서 교회는 하나님의 방법이며</p>
                            <p>또한 하나님의 거룩한 꿈이기도 합니다.</p>
                        </div>
                        <div className="intro-text-block">
                            <p>빛의교회는 선교하는 교회로서 세상을 밝히는 것이 우리의 사명입니다.</p>
                            <p>빛의교회를 통해서 하나님을 만나시고 평생의 동역자를 만나시고 하나님의 일에 동참하시는 분들이 되기를 바랍니다.</p>
                        </div>
                        <div className="intro-signature">
                            <p>담임목사 천정훈 목사</p>
                            <p className="intro-church-name">LIGHTCC</p>
                        </div>
                    </div>
                );
            case '핵심가치':
                return (
                    <div className="core-values">
                        <div className="value-section value-section-1">
                            <div className="value-content">
                                <h2 className="value-title-en">With<br />God</h2>
                                <div className="value-divider"></div>
                                <div className="value-info">
                                    <h3 className="value-title-kr">우리의 힘 | 예배하는 공동체</h3>
                                    <p className="value-description">
                                        우리의 삶에는 예배가 중이 됩니다. 하나 없는 삶은 무 의미한 것입니다. 그 자체로 가장 중요한 것은 하나님과 예배드리는 것입니다.<br />
                                        우리는 가는 곳에다 먼저 예배하고, 온 에게 맞기고 자간마서 예배하고 있습니다. 하나님은 이것에 대해하는 자들을 찾으십니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="value-section value-section-2">
                            <div className="value-content">
                                <h2 className="value-title-en">with<br />the Word</h2>
                                <div className="value-divider"></div>
                                <div className="value-info">
                                    <h3 className="value-title-kr">우리의 원칙 | 말씀에 순종하는 공동체</h3>
                                    <p className="value-description">
                                        우리 삶의 모든 기준은 말씀이 됩니다. 말씀이 기준이고, 말씀에 순종하며, 말씀의 열매를 꼭이 알아가며 열정합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="value-section value-section-3">
                            <div className="value-content">
                                <h2 className="value-title-en">with<br />the People</h2>
                                <div className="value-divider"></div>
                                <div className="value-info">
                                    <h3 className="value-title-kr">우리의 관심 | 섬기하는 공동체</h3>
                                    <p className="value-description">
                                        우리의 관심은 복음을 전하고 하나님의 나라를 확장하는 것에 있습니다. 우리는 우리의 삶을 즐겁게지만 우리의 삶을 다 즐겁게지 않습니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="value-section value-section-4">
                            <div className="value-content">
                                <h2 className="value-title-en">with<br />the Future</h2>
                                <div className="value-divider"></div>
                                <div className="value-info">
                                    <h3 className="value-title-kr">우리의 책임 | 미래를 준비하는 공동체</h3>
                                    <p className="value-description">
                                        복음은 다음 세대로 이어져야 합니다. 우리에게는 성실히 기독교로로 살아가는 삶과가는 삶의 모습을 준비 이어져야 할 책임이 있습니다.
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
                                    <img src={`${import.meta.env.BASE_URL}images/pastor_main.jpg`} alt="천정훈 담임목사" />
                                </div>
                                <div className="senior-pastor-info">
                                    <h2 className="senior-pastor-title">천정훈 담임목사</h2>
                                    <div className="senior-pastor-divider"></div>
                                    <div className="senior-pastor-description">
                                        <p>전장훈 목사는 빛의 하나님을 믿어 참롬 꼬고 갈은 사람이다.</p>
                                        <p>교회만이 이 세대만 더치면 대우어라고 공칭 분으며</p>
                                        <p>사람들 새우는 일에 점습을 다하는 그는, 예수님이 공포시면 교회를 새우길 위해서 오늘도 무릅을 꿇는다.</p>
                                        <p>명전교회에서 목회를 시작하고 온누리교회에서 부목사로 섬겼다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Associate Pastors Section */}
                        <div className="staff-category">
                            <div className="staff-category-label">목사, 전도사</div>
                            <div className="staff-grid">
                                <div className="staff-card">
                                    <div className="staff-photo">
                                        <img src={`${import.meta.env.BASE_URL}images/pastor1.jpg`} alt="이진석 목사" />
                                    </div>
                                    <h3 className="staff-name">이진석 목사</h3>
                                    <p className="staff-description">
                                        이진석 목사는 하나님을 경외하며 하나님께 충성하며 갈등이 되심이다. 주님 열강 주님에게 헌신이 그리고 그렇게 공리하며 주님이란 주목하면 기쁨되어 이루어진 관심을 세계를 새우지길 소망하며 나갑니다.
                                    </p>
                                </div>
                                <div className="staff-card">
                                    <div className="staff-photo">
                                        <img src={`${import.meta.env.BASE_URL}images/pastor2.jpg`} alt="최인호 전도사" />
                                    </div>
                                    <h3 className="staff-name">최인호 전도사</h3>
                                    <p className="staff-description">
                                        최인호 전도사는 주목의 기시정에 주목할 시편하는 기쁨을 얻었고 나는 시대의어 예배로 우리와 관계가 다집니다. 애매 기정하여 모셔 또일기를 모셔 하나님의 영광과 영광을 구하며 배태드리과 상병하여 나갑니다.
                                    </p>
                                </div>
                                <div className="staff-card">
                                    <div className="staff-photo">
                                        <img src={`${import.meta.env.BASE_URL}images/pastor3.jpg`} alt="신예찬 전도사" />
                                    </div>
                                    <h3 className="staff-name">신예찬 전도사</h3>
                                    <p className="staff-description">
                                        신예찬 전도사는 이를들의 예수님을 자장하는 삶을 실천하기 위해 일하시는 그는 미리실 사람이다. 자신의 또를 내어 놓고 하나님의 똑똑 구하는 갈십여 예배를 드리기를 소망하며 나갑니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Missionaries Section */}
                        <div className="staff-category">
                            <div className="staff-category-label">선교사</div>
                            <div className="staff-grid">
                                <div className="staff-card">
                                    <div className="staff-photo">
                                        <img src={`${import.meta.env.BASE_URL}images/missionary1.jpg`} alt="케냐 박동현 선교사" />
                                    </div>
                                    <h3 className="staff-name">케냐 박동현 선교사</h3>
                                </div>
                                <div className="staff-card">
                                    <div className="staff-photo">
                                        <img src={`${import.meta.env.BASE_URL}images/missionary2.jpg`} alt="케냐 이영도 선교사" />
                                    </div>
                                    <h3 className="staff-name">케냐 이영도 선교사</h3>
                                </div>
                                <div className="staff-card">
                                    <div className="staff-photo">
                                        <img src={`${import.meta.env.BASE_URL}images/missionary3.jpg`} alt="필리핀 박철원 선교사" />
                                    </div>
                                    <h3 className="staff-name">필리핀 박철원 선교사</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case '교회역사':
                const years = ['2025년', '2024년', '2023년', '2022년', '2021년(이전)'];
                const historyData = {
                    '2025년': [
                        { date: '2025. 1. 17(금)', content: '금요일 밤 기도 시작' },
                        { date: '2025. 1. 26(일) ~ 3(수)', content: '제1차절기간 \'Break Through with Faith\'' },
                        { date: '2025. 1. 26(토)', content: '1월 생명을 주는 나무 봉사' },
                        { date: '2025. 2. 1(토)', content: '2월 은가족 네째예배 시작' },
                        { date: '2025. 2월 금요성령일 기도회', content: '2월 금요성령일 기도회 2월 예언선교 집회 및 기도회' },
                        { date: '2025. 2. 16(토)', content: '20일간 서부 돌섬선 성경' },
                        { date: '2025. 2. 18(수) ~ 5. 7(수)', content: '20간 하나님과 동행하는 삶' },
                        { date: '2025. 2. 22(금)', content: '목양교원 리더십주중반(일실 코리네의남)' },
                        { date: '2025. 2. 28(금)', content: '생명을 주는 나무 봉사' },
                        { date: '2025. 3. 5(수)', content: '제9회 수요일 예배(시도은원 31주 ~ 4(월))' },
                        { date: '2025. 3. 16(수) ~ 4. 30(수)', content: '2025년 길반기 부교갈발 성경리 통독계획1. 신사기, 구속사) LBS 개강' },
                        { date: '2025. 3. 21(금) ~ 22(토)', content: '2025년 길반기 성경프로 파엔 단기집' },
                        { date: '2025. 3. 23(주일)', content: 'LIGHT_든날 데이 시작' },
                        { date: '2025. 5월 가장예배', content: 'House Worship 북차 팔래' },
                        { date: '2025. 5월초? Welcome home', content: '1. House Worship\n2. 베일 로 커얼성이 전할' },
                        { date: '2025. 5. 8(목)', content: '본격 자녀훈육비과 공패는 은혜와 진주' }
                    ],
                    '2024년': [
                        { date: '2024. 12. 25', content: '크리스마스 성탄 예배' },
                        { date: '2024. 11. 24', content: '추수감사주일 예배' }
                    ],
                    '2023년': [
                        { date: '2023. 12. 31', content: '송구영신 예배' }
                    ],
                    '2022년': [
                        { date: '2022. 10. 2', content: '교회 창립 기념일' }
                    ],
                    '2021년(이전)': [
                        { date: '2021. 5. 16', content: '교회 첫 예배' }
                    ]
                };

                return (
                    <div className="history-section">
                        <div className="history-header">
                            <h2 className="history-title">교회역사</h2>
                            <div className="history-divider"></div>
                            <p className="history-subtitle">어려분을 환영하고 축복합니다.</p>
                        </div>

                        <div className="history-years">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    className={`history-year-btn ${selectedYear === year ? 'active' : ''}`}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        <div className="history-timeline">
                            <div className="history-timeline-year">{selectedYear}</div>
                            <div className="history-events">
                                {historyData[selectedYear]?.map((event, index) => (
                                    <div key={index} className="history-event">
                                        <div className="history-event-date">{event.date}</div>
                                        <div className="history-event-content">{event.content}</div>
                                    </div>
                                ))}
                            </div>
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
                            LIGHT<br />
                            community<br />
                            church
                        </h1>
                        <p className="intro-hero-subtitle">하나님의 사랑으로 세워진 믿어지는 빛의교회 천정훈 목사</p>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className={`intro - content - section ${activeTab === '핵심가치' ? 'no-padding' : ''} `}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Intro;
