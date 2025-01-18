import React from 'react'
import TitleContaint from "./innerCom/TitleContaint";
import ProfileDetails from './innerCom/ProfileDetails';
import EditProfile from './innerCom/EditProfile';

const UserProfile = () => {
  return (
    <>
    <TitleContaint/>
    <div className='py-20 flex justify-around '>
        <div className='w-full'><ProfileDetails/></div>
        <div className='border-2 w-full'><EditProfile/></div>
    </div>
    </>
  )
}

export default UserProfile