import ReactDOM, { createRoot } from 'react-dom/client';
import React, { useState } from "react";
import logo from "./images/logo.png";
import Registration from './Registration';

export default Menu = () => {
  return (
    <>
    <nav className="flex fixed w-full z-50 top-0 justify-around py-5 text-white bg-gray-800">
       <div className="flex">
        {/* <img src={logo} alt="JobPortal Logo" className="navbar-logo-img w-24 " /> */}
        <span>Hirehub</span>
      </div>
      <div className="">
        <ul className='flex'>
          <li className='p-1'><a href="/" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Home</a></li>
          <li className='p-1'><a href="/jobs" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Jobs</a></li>
          <li className='p-1'><a href="/employers" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Employers</a></li>
          <li className='p-1'><a href="/candidates"  className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Candidates</a></li>
          <li className='p-1'><a href="/contact" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Contact Us</a></li>
        </ul>
      </div>
      <div className="authorize-btn">
      <ul className='flex'>
          <li className='p-1'><a href="/registration"  className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Register</a></li>
          <li className='p-1'><a href="/" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Login</a></li>
      </ul>
      </div>
    </nav>
    </>
  );
};