import React from 'react';
import CoursePage from './Course';
import FAQSection from './FAQSection';
import TBanner from './TBanner';
import Footer from '../home/Footer';



const Training: React.FC = () => {
    return (
        <>
            <TBanner />
            <CoursePage />
            <FAQSection />
            <Footer />
        </>
    );
};

export default Training;