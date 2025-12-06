import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slides = [
    {
        id: 1,
        image: `${import.meta.env.BASE_URL}images/slide1.png`,
        title: '빛의교회에 오신 것을 환영합니다',
        subtitle: '하나님의 사랑이 넘치는 공동체'
    },
    {
        id: 2,
        image: `${import.meta.env.BASE_URL}images/slide2.png`,
        title: '함께하는 기쁨',
        subtitle: '서로 사랑하며 섬기는 행복한 교회'
    },
    {
        id: 3,
        image: `${import.meta.env.BASE_URL}images/slide3.png`,
        title: '말씀과 기도',
        subtitle: '매일 주님과 동행하는 삶'
    },
    {
        id: 4,
        image: `${import.meta.env.BASE_URL}images/slide4.png`,
        title: '세상을 향한 빛',
        subtitle: '복음의 빛을 비추는 선교적 교회'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-content">
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                    </div>
                </div>
            ))}

            <button className="slider-arrow prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
                &#10095;
            </button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
