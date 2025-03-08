import ReactDOM, { createRoot } from 'react-dom/client';
import { Outlet, Link } from "react-router";
import React, { useState } from "react";
import logo from "./images/logo.png";
import Registration from './Registration';
import Dropdown from './innerCom/DropDown';

const user = localStorage.getItem("user");
const userToken = localStorage.getItem("userToken");
const userRole = JSON.parse(user)?.role;

const Menu = () => {
  return (
    <>
    
    <nav className="max-mobile:block md:flex fixed w-full z-50 top-0 justify-around py-5 text-white bg-gray-800">
       <div className="flex">
        {/* <img src={logo} alt="JobPortal Logo" className="navbar-logo-img w-24 " /> */}
        <span>Hirehub</span>
      </div>
      <div className="">
        <ul className='md:flex'>
          <li className='p-1'><Link to="/" className='max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Home</Link></li>
          <li className='p-1'><Link to="/managejobs" className='max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>ManageJobs</Link></li>
          {(userRole == "job_seeker") &&
          <>
          <li className='p-1'><Link to="/jobs" className='max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Jobs</Link></li>
          <li className='p-1'><Link to="/userprofile" className='max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>UserProfile</Link></li>
          </>
          }
          {(userRole == "job_provider") &&
          <>
          <li className='p-1'><Link to="/addjobs"  className='max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Add Jobs</Link></li>
          <li className='p-1'><Link to="/compannyinfo"  className='max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Company Profile</Link></li>
          </>
          }
          <li className='p-1'><Link to="/contact" className='max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Contact</Link></li>
        </ul>
      </div>
      <div className="authorize-btn max-mobile:mt-5 md:mt-0">
      {!userToken ?
      <ul className='flex max-mobile:justify-around'>
          <li className='p-1'><Link to="/registration"  className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Register</Link></li>
          <li className='p-1'><Link to="/login" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white'>Login</Link></li>
      </ul>
      : <Dropdown/>
      }
      </div>
    </nav>
    
    </>
  );
};

export default Menu;