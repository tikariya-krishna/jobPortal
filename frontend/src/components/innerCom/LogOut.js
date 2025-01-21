import React from 'react'
import ProfileDetails from './ProfileDetails.js'
import TitleContaint from "./TitleContaint.js";
const LogOut = () => {
  return (
    <>
   <TitleContaint name={"Profile Settings"} path={"Profile Settings"}/>
    <div className='py-20 flex justify-center mx-38'>
        <div className='me-7'><ProfileDetails/></div>
        <div className=''><p>Hello</p> </div>
    </div>
    </>
  )
}

export default LogOut