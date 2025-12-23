import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slides = [
    {
        id: 1,
        image: `${import.meta.env.BASE_URL}images/slide1.jpg`,
        title: '',
        subtitle: ''
    },
    {
        id: 2,
        image: `${import.meta.env.BASE_URL}images/slide2.jpg`,
        title: '',
        subtitle: ''
    },
    {
        id: 3,
        image: `${import.meta.env.BASE_URL}images/slide3.jpg`,
        title: '',
        subtitle: ''
    },
    {
        id: 4,
        image: `${import.meta.env.BASE_URL}images/slide3.jpg`,
        title: '',
        subtitle: ''
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
            <div className="slider-container">
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
        </div>
    );
};

export default HeroSlider;
