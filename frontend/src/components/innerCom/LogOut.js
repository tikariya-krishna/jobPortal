import React from 'react'
import ProfileDetails from './ProfileDetails.js'
import TitleContaint from "./TitleContaint.js";

const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userToken"); //  Clear session
  window.location.href = "/login"; //  Redirect to login
};


const LogOut = () => {
  return (
    <>
   <TitleContaint name={"Profile Settings"} path={"Profile Settings"}/>
    <div className='py-20 flex justify-center mx-38'>
        <div className='me-7'><ProfileDetails/></div>
        <div className=''>
          <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded">
              Logout
          </button>
        </div>
    </div>
    </>
  )
}

export default LogOut