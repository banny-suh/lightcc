import React from 'react';
import { Link } from 'react-router-dom';
import './GallerySection.css';

const posters = [
    `${import.meta.env.BASE_URL}images/poster1.png`,
    `${import.meta.env.BASE_URL}images/poster2.png`,
    `${import.meta.env.BASE_URL}images/poster3.png`,
    `${import.meta.env.BASE_URL}images/poster4.png`,
    `${import.meta.env.BASE_URL}images/poster5.png`,
];

const bulletins = [
    { title: '2025. 11. 30. 빛의주보', date: '2025-11-29' },
    { title: '2025. 11. 23 빛의주보', date: '2025-11-22' },
    { title: '2025. 11. 16 빛의주보', date: '2025-11-15' },
    { title: '2025. 11. 9. 빛의주보', date: '2025-11-08' },
];

const prayers = [
    { title: "오늘의 기도 71. '더 좋은 길로 인도하시는 분이십니다'", date: '20시간전', isNew: true },
    { title: "오늘의 기도 70. '말과 병거를 의지하지 않게 하소서'", date: '20시간전', isNew: true },
    { title: '오늘의 기도 69. 신중한 삶을 살아가게 하소서', date: '2025-12-01' },
    { title: '오늘의 기도 68. 새로운 기회를 주시니 감사합니다', date: '2025-12-01' },
];

const GallerySection = () => {
    return (
        <section className="gallery-section">
            <div className="gallery-container">
                {/* Poster Carousel */}
                <div className="poster-carousel">
                    {posters.map((poster, index) => (
                        <div
                            key={index}
                            className="poster-item"
                            style={{ backgroundImage: `url(${poster})` }}
                        ></div>
                    ))}
                </div>

                {/* Lists Section */}
                <div className="lists-container">
                    {/* Church Bulletin */}
                    <div className="list-column">
                        <div className="list-header">
                            <span className="list-title">교회주보</span>
                            <span className="list-arrow">»</span>
                        </div>
                        <ul className="list-items">
                            {bulletins.map((item, index) => (
                                <li key={index} className="list-item">
                                    <span className="list-item-title">{item.title}</span>
                                    <span className="list-item-date">{item.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Today's Prayer */}
                    <div className="list-column">
                        <div className="list-header">
                            <span className="list-title">오늘의 기도</span>
                            <span className="list-arrow">»</span>
                        </div>
                        <ul className="list-items">
                            {prayers.map((item, index) => (
                                <li key={index} className="list-item">
                                    <span className="list-item-title">
                                        {item.title}
                                        {item.isNew && <span className="new-badge">N</span>}
                                    </span>
                                    <span className="list-item-date">{item.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
