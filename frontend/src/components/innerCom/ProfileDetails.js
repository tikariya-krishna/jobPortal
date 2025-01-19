import React from "react";
import UserProfile from "../images/user-profile.png";

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
                    <li className="mb-3 border-2 rounded-md hover:shadow-md"><a href="/userprofile" className="w-full p-3"><span>icon</span> <span>Dashboard</span></a></li>
                    <li className="mb-3 border-2 rounded-md hover:shadow-md"><a href="/userprofile" className="w-full p-3"><span>icon</span> <span>Edit Profile</span></a></li>
                    <li className="border-2 rounded-md hover:shadow-md"><a href="/userprofile" className="w-full p-3"><span>icon</span> <span>Log out</span></a></li>
                </ul>
            </div>
        </>
    )
};

export default ProfileDetails;