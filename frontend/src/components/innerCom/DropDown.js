import React, { useState } from "react";
import {Outlet,Link} from 'react-router'

const user = localStorage.getItem("user");
const userName = JSON.parse(user)?.name;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block rounded-md">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="max-mobile:block max-mobile:text-center max-mobile:mx-5 md:mx-0 md:inline rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
      >
        {userName}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-black rounded-lg shadow-lg">
          <ul className="py-2">
            <li><Link to="/userprofile" className=" mb-3 block p-3 rounded-md hover:shadow-md border-2 border-black hover:border-2 hover:border-white"><span>Profile</span></Link></li>
            <li><Link to="/logout" className="mb-3 block p-3 rounded-md hover:shadow-md border-2 border-black hover:border-2 hover:border-white"><span>Log out</span></Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
