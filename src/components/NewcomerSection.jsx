import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewcomerSection.css';

const steps = [
    {
        number: 'STEP ①',
        title: '등록카드 작성',
        description: '예배 전후 등록카드 작성'
    },
    {
        number: 'STEP ②',
        title: '새가족 교육',
        description: '5주 과정'
    },
    {
        number: 'STEP ③',
        title: '새가족 환영',
        description: '예배 중 환영인사'
    },
    {
        number: 'STEP ④',
        title: '공동체 편성',
        description: '교인등록 후 공동체 편성'
    }
];

const faqs = [
    {
        category: '새가족등록',
        question: '새가족등록절차가 궁금합니다.',
        answer: '새가족 등록은 예배 후 안내 데스크에서 진행하실 수 있습니다. 간단한 양식을 작성하시면 담당 목회자가 연락을 드립니다.'
    },
    {
        category: '새가족교육',
        question: '빛의교회는 어떤 교회 소속인가요?',
        answer: '빛의교회는 예수 그리스도의 복음을 전하는 건강한 교회입니다. 자세한 교리와 비전은 교회소개 페이지에서 확인하실 수 있습니다.'
    },
    {
        category: '사역현황',
        question: '빛의교회가 가장 중요하게 추구하는 방향은 무엇인가요?',
        answer: '빛의교회는 하나님 사랑, 이웃 사랑을 실천하며 복음으로 세상을 변화시키는 것을 가장 중요하게 추구합니다.'
    }
];

const NewcomerSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="newcomer-section">
            <div className="newcomer-container">
                {/* Steps Section */}
                <div className="newcomer-welcome-image">
                    <img src={`${import.meta.env.BASE_URL}images/newcomer_welcome.png`} alt="환영합니다" />
                    <div className="welcome-overlay">
                        <h3>환영합니다</h3>
                        <p>빛의교회에 오신 여러분을 진심으로 축복합니다</p>
                    </div>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section - Full Width */}
            <div className="faq-section">
                <div className="faq-content-wrapper">
                    <h2 className="faq-title">새가족 FAQ</h2>
                    <p className="faq-description">
                        빛의교회 새가족으로 등록하시면서 가장 많이 하시는 질문/답변을 정리했습니다.
                    </p>
                    <p className="faq-subtitle">
                        추가적으로 궁금하신 사항들은 아래 '등록안내'를 통하여 문의주시면 담당자 확인 후 친절히 응대해드리겠습니다.
                    </p>

                    <div className="faq-button-container">
                        <Link to="/welcome" className="faq-button">
                            등록안내
                        </Link>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <div className="faq-question-content">
                                        <span className="faq-category">{faq.category}</span>
                                        <span className="faq-question-text">{faq.question}</span>
                                    </div>
                                    <div className="faq-toggle">+</div>
                                </div>
                                <div className="faq-answer">
                                    <div className="faq-answer-content">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewcomerSection;
