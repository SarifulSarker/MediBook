import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-500 text-white rounded-xl w-8 h-8 flex items-center justify-center text-lg font-bold shadow-md">★</div>
            <span className="text-2xl font-semibold text-gray-900">Prescripto</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">COMPANY</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><a href="#" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition">About us</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition">Delivery</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition">Privacy policy</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col justify-center items-end text-right">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">GET IN TOUCH</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>+0-000-000-000</li>
            <li>sarifulsarker19@gmail.com</li> {/* Replace with your real name/email if different */}
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-100 text-center text-sm text-gray-500 py-6">
        Copyright 2025 © sariful – All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
