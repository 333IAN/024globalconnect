import React from 'react';

const HeroWithCTA = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero text-center bg-gradient-to-br from-blue-100 to-blue-200 pt-40 pb-24">
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

      {/* CTA Section */}
      <section id="contact" className="bg-blue-700 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Digital Revolution?</h2>
          <p className="mb-8 max-w-xl mx-auto">Become part of our growing community and access opportunities through our platform.</p>
          <div className="flex justify-center gap-4">
            <a href="/login" className="btn bg-white text-blue-700">Login to Your Account</a>
            <a href="/register" className="btn btn-outline border-white text-white">Create New Account</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroWithCTA;