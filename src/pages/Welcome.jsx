import React from 'react';
import './Welcome.css';

const Welcome = () => {
    const welcomeValues = [
        {
            title: 'With God',
            subtitle: '우리의 힘',
            image: `${import.meta.env.BASE_URL}images/value_god.jpg`
        },
        {
            title: 'With the Word',
            subtitle: '우리의 원칙',
            image: `${import.meta.env.BASE_URL}images/value_word.jpg`
        },
        {
            title: 'With the People',
            subtitle: '우리의 관심',
            image: `${import.meta.env.BASE_URL}images/value_people.jpg`
        },
        {
            title: 'With the Future',
            subtitle: '우리의 확장',
            image: `${import.meta.env.BASE_URL}images/value_future.jpg`
        }
    ];

    const welcomeSteps = [
        {
            step: '01',
            title: '새가족교육 신청',
            description: '새가족교육을 신청한 뒤 5주 교육에 참여합니다.'
        },
        {
            step: '02',
            title: '새가족교육 진행(5주)',
            description: '5주에 걸쳐 새가족교육에 참여합니다. (주일 2부 예배 후 진행)'
        },
        {
            step: '03',
            title: '새가족교육 수료식',
            description: '새가족교육을 모두 마친 뒤 수료식에 참여합니다.'
        }
    ];

    return (
        <div className="welcome-page">
            {/* Welcome Hero Section */}
            <section className="welcome-hero-section">
                <div className="welcome-hero-content">
                    <h2 className="welcome-hero-title">
                        하나님의 사랑으로<br />
                        세상을 밝히는<br />
                        빛의교회에 오신 여러분을 환영합니다.
                    </h2>
                    <div className="welcome-hero-divider"></div>
                    <div className="welcome-hero-text">
                        <p>빛의교회에 방문해주신 여러분,</p>
                        <p>주님의 이름으로 환영하고 축복합니다.</p>
                        <p>저희 교회는 예배와 선교에 힘쓰며 예수교장로회통합 교단에 소속된 건강한 교회입니다.</p>
                        <p>하나님은 저희를 세상의 빛으로 부르셨습니다.</p>
                        <p>어두운 세상을 하나님의 사랑으로 밝히며 살아가는 저와 여러분이 되기를 소망합니다.</p>
                    </div>
                </div>

                {/* Core Values Grid */}
                <div className="welcome-values-grid">
                    {welcomeValues.map((value, index) => (
                        <div key={index} className="welcome-value-card">
                            <div className="welcome-value-image" style={{ backgroundImage: `url(${value.image})` }}></div>
                            <div className="welcome-value-info">
                                <h3 className="welcome-value-title">{value.title}</h3>
                                <p className="welcome-value-subtitle">{value.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newcomer Steps Section */}
            <section className="welcome-steps-section">
                <div className="welcome-steps-container">
                    {welcomeSteps.map((step, index) => (
                        <div key={index} className="welcome-step-item">
                            <div className="welcome-step-badge">STEP {step.step}</div>
                            <h3 className="welcome-step-title">{step.title}</h3>
                            <p className="welcome-step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interior Image Section */}
            <section className="welcome-interior-section">
                <div className="welcome-interior-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/worship_hero.png)` }}></div>
            </section>

            {/* Location Section */}
            <section className="welcome-location-section">
                <h2 className="welcome-location-title">오시는 길</h2>

                <div className="welcome-contacts-container">
                    <div className="welcome-contact-item">
                        <div className="welcome-contact-label">Tel.</div>
                        <div className="welcome-contact-value">02-532-9826</div>
                    </div>
                    <div className="welcome-contact-divider"></div>
                    <div className="welcome-contact-item">
                        <div className="welcome-contact-label">Fax.</div>
                        <div className="welcome-contact-value">02-533-9826</div>
                    </div>
                    <div className="welcome-contact-divider"></div>
                    <div className="welcome-contact-item">
                        <div className="welcome-contact-label">Email.</div>
                        <div className="welcome-contact-value">lightcc-@naver.com</div>
                    </div>
                </div>

                <div className="welcome-address-container">
                    <h3 className="welcome-church-name">빛의교회</h3>
                    <p className="welcome-address">서울특별시 서초구 서초대로 115</p>
                </div>

                <div className="welcome-map-container">
                    <iframe
                        src="https://map.naver.com/p/search/%EB%B9%9B%EC%9D%98%EA%B5%90%ED%9A%8C/place/21382320?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202512051512&locale=ko&svcName=map_pcv5&searchText=%EB%B9%9B%EC%9D%98%EA%B5%90%ED%9A%8C"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="빛의교회 위치"
                    ></iframe>
                </div>
            </section>

            {/* Online Registration Section */}
            <section className="welcome-registration-section">
                <h2 className="welcome-registration-title">새가족 온라인 등록</h2>
                <div className="welcome-registration-divider"></div>

                <p className="welcome-registration-desc">
                    빛의교회에 교인으로 등록을 원하시면 교회에 비치된 새가족등록카드를 작성하여 제출<br />
                    하시거나, 온라인 등록 폼을 작성해 주시길 바랍니다. 등록신청이 완료된 후 작성해주신<br />
                    연락처로 담당 교역자가 연락을 드리게 됩니다.
                </p>

                <div className="welcome-registration-divider-dotted"></div>

                <form className="registration-form">
                    <div className="form-group">
                        <label className="form-label required">이름</label>
                        <input type="text" className="form-input" />
                    </div>

                    <div className="form-group">
                        <label className="form-label required">생년월일</label>
                        <div className="date-input-wrapper">
                            <input type="text" className="form-input date-input" placeholder="년/월/일" />
                            <span className="calendar-icon">▼</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label required">휴대폰번호</label>
                        <div className="phone-input-group">
                            <input type="text" className="form-input phone-part" />
                            <input type="text" className="form-input phone-part" />
                            <input type="text" className="form-input phone-part" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">이메일</label>
                        <input type="email" className="form-input" />
                    </div>

                    <div className="form-group">
                        <label className="form-label required">신앙경력</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input type="radio" name="faith" /> 원입(첫 신앙생활)
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="faith" /> 세례
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="faith" /> 입교
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label required">교회를 방문하게 된 동기 (어떻게 알게 되었나요? 등록을 결정한 동기는 무엇인가요?)</label>
                        <textarea className="form-textarea"></textarea>
                    </div>

                    <div className="form-group privacy-group">
                        <label className="form-label required">개인정보 수집 및 이용 동의</label>
                        <div className="privacy-box">
                            <p><strong>빛의교회(이하 '교회'라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.</strong></p>
                            <br />
                            <p><strong>제1조 (개인정보의 처리목적)</strong></p>
                            <p>교회는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                        </div>
                        <label className="checkbox-label">
                            <input type="checkbox" /> 개인정보 수집 및 이용에 동의합니다.
                        </label>
                    </div>

                    <button type="submit" className="submit-btn">작성</button>
                </form>
            </section>
        </div>
    );
};

export default Welcome;
