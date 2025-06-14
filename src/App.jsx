import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import LoginForm from './components/login/LoginForm';
import RegistrationForm from './components/login/RegistrationForm';
import ContactForm from './components/login/ContactForm';
import AboutUs from './pages/AboutUs';
import BlogForm from './components/login/BlogForm';
import AffiliateSignup from './components/affiliate/AffiliateSignup'; // ✅ New import
import AffiliateLogin from './components/affiliate/AffiliateLogin';
import AffiliatePartner from './components/affiliate/AffiliatePartner';


function App() {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="bg-blue-night text-white p-4 flex gap-6">
        <Link to="/" className="hover:text-blue-light transition-colors">Home</Link>
        <Link to="/login" className="hover:text-blue-light transition-colors">Login</Link>
        <Link to="/register" className="hover:text-blue-light transition-colors">Register</Link>
        <Link to="/contact" className="hover:text-blue-light transition-colors">Contact</Link>
        <Link to="/aboutus" className="hover:text-blue-light transition-colors">About Us</Link>
        <Link to="/blog" className="hover:text-blue-light transition-colors">Create Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<BlogForm />} />
        <Route path="/affiliate-signup" element={<AffiliateSignup />} /> {/* ✅ New route */}
        <Route path="/affiliate-login" element={<AffiliateLogin />} />
        <Route path="/affiliate-partner" element={<AffiliatePartner/>}/>
      </Routes>
    </div>
  );
}

export default App;
