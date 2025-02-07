import React from 'react';
//import Header from '../components/Header';
import AboutUs from '../components/HandwritingHero';
import HandwritingOverview from '../components/HandwritingOverview';
//import Footer from '../components/Footer';
import HomeTestimonials from '../components/hometestimonial';
import Course from '../components/newcardtest';
import FAQ from '../components/FranchiseFAQ';

export const HandwritingPage = () => {
    return (
      <div>
        <AboutUs />
        <HandwritingOverview />
        <FAQ/>
        <HomeTestimonials />
        <Course />
      </div>
    );
  };
  
  export default HandwritingPage;