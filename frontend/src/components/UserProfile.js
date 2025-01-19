import React from 'react'
import TitleContaint from "./innerCom/TitleContaint";
import ProfileDetails from './innerCom/ProfileDetails';
import EditProfile from './innerCom/EditProfile';

const UserProfile = () => {
  return (
    <>
    <TitleContaint/>
    <div className='py-20 flex justify-center mx-38'>
        <div className='me-7'><ProfileDetails/></div>
        <div className='border-2 rounded-md'><EditProfile/></div>
    </div>
    </>
  )
}

export default UserProfile