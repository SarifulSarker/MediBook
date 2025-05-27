import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500 px-4">
      <img className="w-28 cursor-pointer" src={assets.logo} alt="logo" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="relative group">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors" className="relative group">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" className="relative group">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className="relative group">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {/* User dropdown or login */}
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointment</p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Hamburger Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-30 bg-white w-3/4 h-full p-6 transition-all duration-300 md:hidden ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <img className="w-24" src={assets.logo} alt="logo" />
          <img
            onClick={() => setShowMenu(false)}
            className="w-6 cursor-pointer"
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <ul className="flex flex-col gap-4 font-medium text-gray-800">
          <NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink>
          <NavLink to="/doctors" onClick={() => setShowMenu(false)}>All Doctors</NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
