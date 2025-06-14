// src/pages/Home.jsx
import React from 'react';
import Header from '../components/login/Header';
import MissionVision from '../components/login/MissionVision';
import HeroWithCTA from '../components/login/HeroWithCTA'
import Footer from '../components/login/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroWithCTA />
      <MissionVision />
      <Footer />
    </>
  );
};

export default Home;
