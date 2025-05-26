import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-4 md:px-20 py-14 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">
        CONTACT <span className="text-primary">US</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full rounded-2xl shadow-md"
          />
        </div>

        {/* Info Section */}
        <div className="lg:w-1/2 w-full">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">OUR OFFICE</h3>
            <p className="mb-1">00000 Willms Station</p>
            <p className="mb-1">Suite 000, Washington, USA</p>
            <p className="mb-1">Tel: (000) 000-0000</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              CAREERS AT PRESCRIPTO
            </h3>
            <p>Learn more about our teams and job openings.</p>
          </div>

          <button className="mt-2 px-6 py-2 border border-gray-800 rounded hover:bg-primary hover:text-white transition">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
