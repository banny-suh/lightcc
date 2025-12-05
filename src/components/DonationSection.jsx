import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import './DonationSection.css';

const DonationSection = () => {
    return (
        <section className="donation-section">
            <div className="donation-container">
                <h2 className="donation-title">온라인 헌금안내</h2>
                <div className="donation-divider"></div>

                {/* Bank Info */}
                <div className="bank-section">
                    <div className="bank-logo-container">
                        <div className="bank-icon">
                            <FaUniversity />
                        </div>
                        <div className="bank-name">신한은행</div>
                    </div>

                    {/* Account Boxes */}
                    <div className="account-boxes">
                        <div className="account-box">
                            <div className="account-label">월말헌금 : 빛의교회</div>
                            <div className="account-number">140-010-317448</div>
                        </div>

                        <div className="account-box">
                            <div className="account-label">선교헌금 : 빛의교회(선교)</div>
                            <div className="account-number">140-010-317409</div>
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="donation-info">
                    <p className="info-title">송금시 표기방법</p>
                    <p className="info-text">
                        개좌입금시 입금자명을 이름/성명/월/헌금명으로 기입하여주시기 바랍니다.
                    </p>

                    <p className="info-details">
                        주일헌금 : 홍 | 성명표 : 심 | 감사헌금 : 김 | 선교헌금 : 선<br />
                        예) 홍길동 오월분 월 성도님의 성함은 연중<br />
                        <span className="info-link">김밥8303실</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonationSection;
