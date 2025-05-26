import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-4 md:px-20 py-14 bg-white text-gray-800">
      
      {/* ABOUT US Section */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <img
            src={assets.about_image}
            alt="Doctors"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            ABOUT <span className="text-primary">US</span>
          </h2>
          <p className="mb-4 leading-relaxed text-lg">
            Welcome to <strong>MEDIBOOK</strong>, your trusted partner in managing healthcare needs conveniently and efficiently. We understand the challenges people face in booking doctor appointments and managing medical records.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            Prescripto is committed to advancing healthcare technology. We integrate cutting-edge features to ensure a seamless and superior user experience.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-primary">Our Vision</h3>
          <p className="leading-relaxed text-lg">
            To create a smooth, accessible healthcare journey for everyone — bridging the gap between patients and providers so you get care when you need it most.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="mt-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          WHY CHOOSE <span className="text-primary">US</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl border shadow-md hover:bg-primary hover:text-white transition-all duration-300">
            <h4 className="text-xl font-semibold mb-3">EFFICIENCY</h4>
            <p>
              Streamlined appointment scheduling that fits your busy lifestyle.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-2xl border shadow-md hover:bg-primary hover:text-white transition-all duration-300">
            <h4 className="text-xl font-semibold mb-3">CONVENIENCE</h4>
            <p>
              Connect with a network of trusted healthcare professionals in your area.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 rounded-2xl border shadow-md hover:bg-primary hover:text-white transition-all duration-300">
            <h4 className="text-xl font-semibold mb-3">PERSONALIZATION</h4>
            <p>
              Get tailored recommendations and reminders to stay on top of your health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
