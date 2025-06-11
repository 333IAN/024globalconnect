import React from 'react';
import bgImage from "../../assets/AATIFRONT/header_bg.jpg";

const Hero = () => {
  return (
    <section className="hero text-center bg-gradient-to-br from-blue-100 to-blue-200 pt-40 pb-24" style={{backgroundImage:`url(${bgImage})`}}>
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Empowering African Communities Through Digital Solutions
        </h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
          Bridging the gap between opportunities and communities through innovative technology solutions.
        </p>
        <div className="flex justify-center gap-4 mb-10">
          <a href="#" className="btn">Learn More</a>
          <a href="#" className="btn btn-outline">Watch Video</a>
        </div>
        <div className="hero-image mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg">
          <img src="https://via.placeholder.com/800x450?text=Digital+Empowerment+Platform" alt="Digital empowerment platform" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

