import React from 'react';
import HeroSlider from '../components/HeroSlider';
import HomeContent from '../components/HomeContent';
import SermonSection from '../components/SermonSection';
import WorshipSchedule from '../components/WorshipSchedule';
import GallerySection from '../components/GallerySection';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSlider />
            <HomeContent />
            <SermonSection />
            <WorshipSchedule />
            <GallerySection />
        </div>
    );
};

export default Home;
