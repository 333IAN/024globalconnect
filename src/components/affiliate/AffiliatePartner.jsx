import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../../assets/AATIFRONT/images.jpg";

const PartnerPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-6" style={{backgroundImage:`url(${bgImage})`}}>
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4">
          Partner with 024GlobalConnect
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          At 024GlobalConnect, we believe in building strong relationships with brands and professionals 
          to reach new audiences and create mutual growth opportunities.
        </p>

        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>🌐 Access to a global marketing platform</li>
          <li>🧑‍💼 Personalized support and resources</li>
          <li>🤝 Flexible collaboration models</li>
        </ul>

        <p className="text-gray-700 text-base mb-6">
          Interested in partnering? Reach out to us at{' '}
          <a
            href="mailto:partners@024globalconnect.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            partners@024globalconnect.com
          </a>{' '}
          or fill out our partnership form.
        </p>

        <div className="flex justify-between items-center mt-10">
          <Link to="/" className="text-blue-600 hover:underline hover:text-blue-800">
            ← Back to Home
          </Link>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-700 text-white px-5 py-2 rounded-full shadow hover:bg-blue-800 transition"
          >
            {showForm ? 'Hide Form' : 'Fill Partnership Form'}
          </button>
        </div>

        {showForm && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Partnership Form</h2>
            <PartnershipForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerPage;
