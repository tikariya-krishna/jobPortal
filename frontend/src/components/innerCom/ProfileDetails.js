import React from "react";
import UserProfile from "../images/user-profile.png";
import {Outlet,Link} from 'react-router';
import { MdDashboard } from 'react-icons/md';
import { MdDashboard, MdEdit, MdBusiness, MdExitToApp } from 'react-icons/md';
const user = localStorage.getItem("user");
const userRole = JSON.parse(user)?.role;
const userName = JSON.parse(user)?.fname;

const ProfileDetails = () =>{
    return(
        <>
            {/* USER PROFILE IMAGE SECTION */}
            <div className="rounded-md shadow-lg overflow-hidden">
                <div className="p-3">
                    <img src={UserProfile} width={"250px"} height={"250px"} className="rounded-md object-cover"/>
                </div>
                <div className="bg-green-500 text-white text-center py-2">
                        <p className="font-semibold text-lg">{userName}</p>
                </div>
            </div>

            {/* Profile Setting section */}
            
            <div className="pt-10">
                <ul>
                    <li><Link to="/dashboard" className="w-full mb-3 border-2 block p-3 rounded-md hover:shadow-md flex"><MdDashboard className="pt-1 text-xl me-1"/><span>Dashboard</span></Link></li>
                    {(userRole == "job_seeker") && <><li><Link to="/userprofile" className="w-full mb-3 border-2 block p-3 rounded-md hover:shadow-md flex"> <MdEdit className="pt-1 text-xl me-1"/> <span>Edit Profile</span></Link></li></>}
                    {(userRole == "job_provider") && <><li><Link to="/compannyinfo" className="w-full mb-3 border-2 block p-3 rounded-md hover:shadow-md flex"> <MdBusiness className="pt-1 text-xl me-1"/> <span>Edit Profile</span></Link></li></>}
                    <li><Link to="/logout" className="w-full mb-3 border-2 block p-3 rounded-md hover:shadow-md flex"><MdExitToApp className="pt-1 text-xl me-1"/> <span>Log out</span></Link></li>
                </ul>
            </div>
        </>
    )
};

export default ProfileDetails;