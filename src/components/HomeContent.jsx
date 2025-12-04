import React, { useState } from 'react';
import './HomeContent.css';

const activities = [
    '/images/activity1.png',
    '/images/activity2.png',
    '/images/activity3.png',
    '/images/activity4.png',
    '/images/activity5.png',
    '/images/activity1.png', // Repeat for infinite scroll illusion if needed, or just extra items
];

const HomeContent = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const nextSlide = () => {
        setScrollIndex((prev) => (prev + 1) % (activities.length - 4)); // Adjust based on visible items
    };

    const prevSlide = () => {
        setScrollIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
    };

    return (
        <section className="home-content">
            <div className="container">
                <div className="home-content__banner">
                    <div className="home-content__banner-left">
                        <h2>
                            <span>하나님의</span>
                            <span>사랑으로</span>
                        </h2>
                        <h2 style={{ color: '#3b5c6b' }}>
                            <span>세상을 밝히는</span>
                            <span style={{ fontWeight: 'bold' }}>빛의교회</span>
                        </h2>
                    </div>

                    <div className="home-content__banner-divider"></div>

                    <div className="home-content__banner-right">
                        <h1>
                            <span className="light">LIGHT</span>
                            <span className="community">community</span>
                            <span className="church">church</span>
                        </h1>
                    </div>
                </div>

                <div className="home-content__text-section">
                    <h3>하나님은 우리를 교회로 부르셨고 교회를 통해서 일하십니다.</h3>
                    <p>
                        교회를 통해서 영혼을 살리고 교회를 통해서 복음을 전하고 교회를 통해서 하나님의 나라를 확장해 갑니다.<br />
                        그래서 교회는 하나님의 방법이며 또한 하나님의 거룩한 꿈이기도 합니다.
                    </p>
                </div>
            </div>

            <div className="home-content__carousel">
                <button className="carousel-arrow prev" onClick={prevSlide}>&#10094;</button>

                <div className="carousel-track" style={{ transform: `translateX(-${scrollIndex * 20}%)` }}>
                    {activities.map((img, index) => (
                        <div
                            key={index}
                            className="carousel-item"
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                    ))}
                </div>

                <button className="carousel-arrow next" onClick={nextSlide}>&#10095;</button>
            </div>
        </section>
    );
};

export default HomeContent;
