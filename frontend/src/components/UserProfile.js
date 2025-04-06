import React from 'react'
import TitleContaint from "./innerCom/TitleContaint";
import ProfileDetails from './innerCom/ProfileDetails';
import EditProfile from './innerCom/EditProfile';
import { Link } from 'react-router';

const UserProfile = () => {
  return (
    <>
    <TitleContaint name={"Profile Settings"} path={"Profile Settings"}/>
    <div className='py-20 flex justify-center mx-38'>
        <div className='me-7'><ProfileDetails/><div className='pt-3'><Link to="/resume" className='py-3 text-center block w-full rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'>Resume Upload</Link></div></div>
        
        <div className='border-2 rounded-md'><EditProfile/></div>
    </div>
    </>
  ) 
}

export default UserProfile