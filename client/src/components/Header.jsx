import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="bg-primary rounded-lg mx-auto px-4 md:px-10 lg:px-20 xl:px-28 min-h-[598px]">
      <div className="flex flex-col lg:flex-row items-center justify-between h-full py-10 gap-10 lg:gap-0">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center lg:justify-end h-full text-white space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <div className="flex items-center gap-4">
            <img src={assets.group_profiles} alt="Group" className="w-24" />
            <p className="text-sm">
              Simply browse through our extensive list of trusted doctors, <br />
              schedule your appointment hassle-free.
            </p>
          </div>

          <a
            href="#speciality"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full w-fit font-semibold hover:scale-105 transition"
          >
            Book appointment
            <img src={assets.arrow_icon} alt="Arrow" className="w-4" />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full lg:w-auto">
          <img
            src={assets.header_img}
            alt="Header"
            className="w-full max-w-[400px] lg:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
