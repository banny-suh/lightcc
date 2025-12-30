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
                const years = ['2025년', '2024년', '2023년', '2022년', '2022년 이전'];
                const historyData = {
                    '2025년': [
                        { createdAt: '2025. 1. 17(금)', content: '금요일 밤 기도회 시작' },
                        { createdAt: '2025. 1. 21(화) ~ 30(목)', content: `케냐 아웃리치 'Break Through with Faith'` },
                        { createdAt: '2025. 1. 25(토)', content: '1월 생명을 주는 나무 봉사' },
                        { createdAt: '2025. 2. 1(토)', content: '2월 온가족 세벽예배 시작' },
                        { createdAt: '2025. 2', content: '2월 한달간 매주 금요일 저녁 8시 기도회' },
                        { createdAt: '2025. 2. 15(토)', content: `장애인 센터 '동심원' 섬김` },
                        { createdAt: '2025. 2. 19(수) ~ 5.7(수)', content: '2025 하나님과 동행하는 삶 (하동삶)' },
                        { createdAt: '2025. 2. 22(토)', content: '빛의교회 리더십수련회(일산 컴프에비뉴)' },
                        { createdAt: '2025. 2. 28(금)', content: '생명을 주는 나무 봉사' },
                        { createdAt: '2025. 3. 5(수)', content: '재의 수요일 예배(사순절 3/5 ~ 4/19)' },
                        { createdAt: '2025. 3. 19(수) ~ 4. 30(수)', content: '2025 상반기 빛의교회 성경공부(성경 통독 프로젝트 1. 선지서) LBS 개강' },//==done
                        { createdAt: '2025. 3. 21(금) ~ 22(토)', content: '2025 상반기 영선훈련 피정 1단계' },
                        { createdAt: '2025. 3. 23(일)', content: 'LIGHT 도넛 데이 시작' },
                        { createdAt: '2025. 5', content: '가정 예배 House Worship 책자 발행' },
                        { createdAt: '2025. 5', content: 'Welcome Home 축제' },
                        { createdAt: '2025. 5. 8(목)', content: '영덕 지품초등학교 꿈꾸는 운동화 전달' }
                    ],
                    '2024년': [
                        { createdAt: '2024. 1. 6', content: '매월 첫째주 토요일 아침 7시 빛의 교회 온가족 새벽예배 시작' },
                        { createdAt: '2024. 2. 6(화) ~ 15(목)', content: `겨울 케냐 아웃리치 '꿈꾸는 놀이터'` },
                        { createdAt: '2024. 2. 22(목) ~ 7. 11(목)', content: `매주 목요일 저녁 8시 예배당 함께 나누기 '주는교회' 목요저녁예배` },
                        { createdAt: '2024. 5. 5(일)', content: `빛의교회 교육부서 첫 연합예배 '와글와글 투게더'` },
                        { createdAt: '2024. 6. 16(일)', content: '애니어그램 세미나 `참된 나를 찾아가는 내적여정`' },
                        { createdAt: '2024. 7. 30(화) ~ 8. 5(월)', content: '여름 필리핀[두마게티] 아웃리치' },
                        { createdAt: '2024. 8. 15(목)', content: '장애인 센터 섬김 시작' },
                        { createdAt: '2024. 10. 2(수) ~ 23(수)', content: `4주 과정 가을 LBS '복음과 함께하는 삶'` },
                        { createdAt: '2024. 10. 7(월) ~ 17(목)', content: `튀르키예 성지순례 '바울의 발자취를 따라서'` },
                        { createdAt: '2024. 11. 1(금) ~ 2(토)', content: '빛의교회 국내성지순례2. 전주&군산' }
                    ],
                    '2023년': [
                        { createdAt: '2023. 2. 2(목) ~ 3(금)', content: '액티브 시니어 캠프[국내성지순례. 인천&강화], 1박 2일' },
                        { createdAt: '2023. 2. 1(수)', content: '수요오전예배 시작' },
                        { createdAt: '2023. 2. 19(일)', content: `창조세계 회복을 위한 '사순절 탄소 금식', 7주` },
                        { createdAt: '2023. 5.', content: '빛의교회 가정예배, 4주 과정[키트 제작&발송]' },
                        { createdAt: '2023. 5. 25(목)', content: `미라클즈 온 써스데이 '꽃모닝 프로젝트' 시작, 매주 목요일 7주[상반기&하반기]` },
                        { createdAt: '2023. 6. 25(일)', content: '필리핀 선교사 파송[박철용,박민경]' },
                        { createdAt: '2023. 7. 19(수) ~ 26(수)', content: '레바논 아웃리치 재개' },
                        { createdAt: '2023. 8. 9(수)', content: '관악구 삼성동 주민센터와 빛의교회 업무협약 체결' },
                        { createdAt: '2023. 10. 22(일)', content: '케냐 꿈꾸는 놀이터를 위한 워킹포미라클' },
                        { createdAt: '2023. 11. 2(일)', content: '빛의교회 권사임직[강금숙 외 11명]' },
                        { createdAt: '2023. 11. 10(금) ~ 11(토)', content: `관악구 삼성동 독거 어르신을 위한 '넉넉 프로젝트'` },
                    ],
                    '2022년': [
                        { createdAt: '2022. 4. 18 ~ 7. 17', content: '담임목사님 안식월' },
                        { createdAt: '2022. 5. 4 ~ 6. 15(수)', content: '빛의교회 첫 지역별[4개지역] 성경공부, 6주 과정' },
                        { createdAt: '2022. 7. 28(목) ~ 8. 5(금)', content: '케냐 아웃리치[코로나 이후 해외 아웃리치 재개]' },
                        { createdAt: '2022. 8. 10(수) ~ 16(화)', content: '필리핀 아웃리치' },
                        { createdAt: '2022. 10. 2(일)', content: '온라인으로 성찬예식 참여[사전 성찬키트 발송]' },
                        { createdAt: '2022. 11. 9 ~ 23(수)', content: '중보기도학교, 3주 과정' },
                    ],
                    '2022년 이전': [
                        { createdAt: '2011. 12. 4', content: '빛의교회 오픈예배' },
                        { createdAt: '2012. 10.', content: '노회가입 설립예배' },
                        { createdAt: '2012. 11. 3(일) ~ 12. 1(일)', content: '2주년, 천 번의 예배, 천 번의 기도(빛의교회 모든 성도가 모두 합해 1000번의 주중예배)' },
                        { createdAt: '2013. 4. 17 ~ 5. 29', content: '특별 수요말씀집회 사도신경 강해(6주) "믿음으로 걸어가리라"' },
                        { createdAt: '2014. 9. 3 ~ 10. 15', content: '특별 수요말씀집회 주기도문 학교(6주)' },
                        { createdAt: '2014. 9. 14 ~ 12. 7', content: '초신자를 위한 12주 과정 "기독교의 기본진리" 시작' },
                        { createdAt: '2015. 11. 22(일)', content: '빛의교회 첫번째 권사 임직[이호일, 김순이 권사]' },
                        { createdAt: '2016. 9. 4(일)', content: '방배동 성전 이전' },
                        { createdAt: '2016. 12. 9(금)', content: '노숙자를 위한 사랑의 텀블러 나눔' },
                        { createdAt: '2017. 1. 19(목) ~ 1. 28(토)', content: '겨울 케냐 아웃리치(마이스끼리아 교회 건축, 십계명학교)' },
                        { createdAt: '2017. 2. 19(일)', content: '케냐 선교사 파송(이정도, 배수연)' },
                        { createdAt: '2018. 5. 27(일)', content: 'Working for Miracle 미혼모자녀돕기 캠패인(매월 넷째 주일 봉사 지속)' },
                        { createdAt: '2018. 7. 24(화) ~ 8. 1(수)', content: '여름 해외 아웃리치 - 레바논 난민캠프' },
                        { createdAt: '2018. 9. 2(일)까지', content: '케냐 마사이 마을 영어성경 보급' },
                        { createdAt: '2019. 5. 26(일)', content: '3부 예배 시작' },
                        { createdAt: '2019. 12. 14(토)', content: 'Give 미 프로젝트 신림동 독거어르신 섬김 시작' },
                        { createdAt: '2019. 12. 14(토)', content: 'Give 미 프로젝트 신림동 독거어르신 섬김 시작' },
                        { createdAt: '2020. 1. 24(금) ~ 2. 1(토)', content: '케냐 아웃리치[엔게레수나 빛의교회 봉헌예배]' },
                        { createdAt: '2020. 3. 1(일)', content: '온라인예배 시작[코로나19 감염 심각단계로 감염 예방]' },
                        { createdAt: '2020. 5. 23(토)', content: '비대면 워킹포미라클[용산가족공원] / 미혼모 자녀들을 위한 걷기대회' },
                        { createdAt: '2020. 12. 11(금)', content: '2020 빛의교회 온라인 전도집회 "우리집에 놀러와" / 빛의속도로' },
                        { createdAt: '2021. 2. 21(일)', content: '온라인(ZOOM) 새가족등록' },
                        { createdAt: '2021. 9. 19(일)', content: '엘키즈 노래하는 백일장' },
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
                                    <span className="timeline-date">{item.createdAt}</span>
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
