import React from 'react';
import HeroSlider from '../components/HeroSlider';
import HomeContent from '../components/HomeContent';
import SermonSection from '../components/SermonSection';
import WorshipSchedule from '../components/WorshipSchedule';
import GallerySection from '../components/GallerySection';
import NewcomerSection from '../components/NewcomerSection';
import MissionSection from '../components/MissionSection';
import DonationSection from '../components/DonationSection';
import LocationSection from '../components/LocationSection';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSlider />
            <HomeContent />
            <SermonSection />
            <WorshipSchedule />
            <GallerySection />
            <NewcomerSection />
            <MissionSection />
            <DonationSection />
            <LocationSection />
        </div>
    );
};

export default Home;
