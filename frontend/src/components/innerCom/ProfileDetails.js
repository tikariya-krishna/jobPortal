import React from "react";
import UserProfile from "../images/user-profile.png";
import {Outlet,Link} from 'react-router'

const ProfileDetails = () =>{
    return(
        <>
            {/* USER PROFILE IMAGE SECTION */}
            <div className="rounded-md shadow-lg overflow-hidden">
                <div className="p-3">
                    <img src={UserProfile} width={"250px"} height={"250px"} className="rounded-md object-cover"/>
                </div>
                <div class="bg-green-500 text-white text-center py-2">
                        <p class="font-semibold text-lg">Alden Smith</p>
                </div>
            </div>

            {/* Profile Setting section */}
            
            <div className="pt-10">
                <ul>
                    <li><Link to="/dashboard" className="w-full mb-3 border-2 block p-3 rounded-md hover:shadow-md"><span>icon</span> <span>Dashboard</span></Link></li>
                    <li><Link to="/companyprofile" className="w-full mb-3 border-2 block p-3 rounded-md hover:shadow-md"><span>icon</span> <span>Edit Profile</span></Link></li>
                    <li><Link to="/logout" className="w-full mb-3 border-2 block p-3 rounded-md hover:shadow-md"><span>icon</span> <span>Log out</span></Link></li>
                </ul>
            </div>
        </>
    )
};

export default ProfileDetails;