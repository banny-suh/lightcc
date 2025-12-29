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
                <div className="welcome-interior-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/worship_hero.jpg)` }}></div>
            </section>

            {/* Location Section */}
            <section className="welcome-location-section">
                <h2 className="welcome-location-title">오시는 길</h2>

                <div className="welcome-contacts-container">
                    <div className="welcome-contact-item">
                        <div className="welcome-contact-label">Tel</div>
                        <div className="welcome-contact-value">02-532-9826</div>
                    </div>
                    <div className="welcome-contact-item">
                        <div className="welcome-contact-label">Fax</div>
                        <div className="welcome-contact-value">02-533-9826</div>
                    </div>
                    <div className="welcome-contact-item">
                        <div className="welcome-contact-label">Email</div>
                        <div className="welcome-contact-value">lightcc-@naver.com</div>
                    </div>
                </div>

                <div className="welcome-address-container">
                    <h3 className="welcome-church-name">빛의교회</h3>
                    <p className="welcome-address">서울특별시 서초구 서초대로 115</p>
                </div>

                <div className="welcome-map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1400.8755329229275!2d126.99281620950927!3d37.4872634611186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1a7ae0bdbd1%3A0x549f69045eae91d1!2z67mb7J2Y6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1766662321554!5m2!1sko!2skr"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="빛의교회 위치"
                    ></iframe>
                </div>
            </section>

            {/* Online Registration Section */}
            {/* Online Registration Section */}
            <section className="welcome-registration-section">
                <div className="registration-header">
                    <span className="reg-subtitle">NEW FAMILY REGISTRATION</span>
                    <h2 className="reg-title">새가족 온라인 등록</h2>
                    <div className="reg-divider"></div>
                    <p className="reg-description">
                        빛의교회에 오신 것을 환영합니다.<br />
                        등록신청이 완료되면 담당 교역자가 연락을 드립니다.
                    </p>
                </div>

                <div className="registration-card">
                    <form className="registration-form">
                        <div className="form-section">
                            <h3 className="section-label">기본 정보</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label required">이름</label>
                                    <input type="text" className="form-input" placeholder="성함을 입력해주세요" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">생년월일</label>
                                    <input type="date" className="form-input" data-placeholder="생년월일 선택" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">휴대폰번호</label>
                                    <div className="phone-inputs">
                                        <input type="text" className="form-input phone-part" maxLength="3" />
                                        <span className="phone-dash">-</span>
                                        <input type="text" className="form-input phone-part" maxLength="4" />
                                        <span className="phone-dash">-</span>
                                        <input type="text" className="form-input phone-part" maxLength="4" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">이메일</label>
                                    <input type="email" className="form-input" placeholder="example@email.com" />
                                </div>
                            </div>
                        </div>

                        <div className="form-divider"></div>

                        <div className="form-section">
                            <h3 className="section-label">신앙 정보</h3>
                            <div className="form-group">
                                <label className="form-label required">신앙경력</label>
                                <div className="radio-group-modern">
                                    <label className="radio-btn">
                                        <input type="radio" name="faith" />
                                        <span className="radio-text">신앙생활 처음 (원입)</span>
                                    </label>
                                    <label className="radio-btn">
                                        <input type="radio" name="faith" />
                                        <span className="radio-text">세례 받음</span>
                                    </label>
                                    <label className="radio-btn">
                                        <input type="radio" name="faith" />
                                        <span className="radio-text">유아세례 / 입교</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group" style={{ marginTop: '30px' }}>
                                <label className="form-label required">방문/등록 동기</label>
                                <textarea className="form-textarea" placeholder="교회를 알게 된 경로와 등록하게 된 동기를 편하게 적어주세요."></textarea>
                            </div>
                        </div>

                        <div className="form-divider"></div>

                        <div className="form-section privacy-section">
                            <div className="privacy-header">
                                <label className="form-label required">개인정보 수집 및 이용 동의</label>
                                <label className="checkbox-custom">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    <span className="check-text">동의합니다</span>
                                </label>
                            </div>
                            <div className="privacy-content">
                                <p><strong>1. 수집목적</strong>: 교회 교적 관리 및 목양 서비스 제공</p>
                                <p><strong>2. 수집항목</strong>: 이름, 생년월일, 연락처, 주소, 신앙경력 등</p>
                                <p><strong>3. 보유기간</strong>: 교적에서 제적될 때까지 (탈퇴 시 즉시 파기)</p>
                                <p>※ 귀하는 개인정보 수집에 거부할 권리가 있으며, 동의 거부 시 교적 등록이 제한될 수 있습니다.</p>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn-modern">
                            <span>등록 신청하기</span>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Welcome;
