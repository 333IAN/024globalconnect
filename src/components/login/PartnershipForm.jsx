import React, { useState } from "react";

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white p-6 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white/90 shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Partner with 024GlobalConnect</h2>
        <p className="text-gray-700">
          At 024GlobalConnect, we believe in building strong relationships with brands and professionals
          to reach new audiences and create mutual growth opportunities.
        </p>

        <ul className="text-gray-700 list-disc ml-6 space-y-1">
          <li>🌐 Access to a global marketing platform</li>
          <li>🧑 Personalized support and resources</li>
          <li>🤝 Flexible collaboration models</li>
        </ul>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.company}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Why do you want to partner with us?"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Partnership Request
          </button>
        </form>

        <p className="text-sm text-gray-600">
          Or email us directly at{" "}
          <a
            href="mailto:partners@024globalconnect.com"
            className="text-blue-600 underline"
          >
             024globalconnect@gmail.com
          </a>
        </p>

        <a href="/" className="text-blue-500 text-sm underline">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
export default PartnershipForm;
