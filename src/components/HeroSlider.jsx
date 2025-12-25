import React, { useState, useEffect } from 'react';
import { fetchHeroSlides } from '../apis/homeApi';
import './HeroSlider.css';

const HeroSlider = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSlides = async () => {
            try {
                const data = await fetchHeroSlides();
                setSlides(data);
            } catch (error) {
                console.error('Failed to fetch hero slides:', error);
            } finally {
                setLoading(false);
            }
        };
        loadSlides();
    }, []);

    useEffect(() => {
        if (slides.length === 0) return;

        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [currentSlide, slides.length]);

    const nextSlide = () => {
        if (slides.length === 0) return;
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        if (slides.length === 0) return;
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (loading) {
        return (
            <div className="hero-slider skeleton" style={{ height: '70vh', width: '100%' }}></div>
        );
    }

    if (slides.length === 0) {
        return null;
    }

    return (
        <div className="hero-slider">
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
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
