import React from "react";

const EditProfile = () =>{
    return(
        <>
            <div className="text-slate-600">
                <form method="post" className="p-3">
                    <div className="flex">
                        <div className="w-full p-3">
                            <div>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name="fname" className="border-2 w-full p-2 rounded-md"/>
                            </div>

                            <div className="pt-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="border-2 w-full p-2 rounded-md"/>
                            </div>
                            <div className="pt-3">
                                <label htmlFor="phone">Phone</label>
                                <input type="phone" id="phone" name="phone" className="border-2 w-full p-2 rounded-md"/>
                            </div>
                            <div className="pt-3">
                            <label htmlFor="Gender">Gender</label>
                            <select className="p-2 border-2 border-inherit w-full rounded-md" id="Gender">
                                <option value="">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            </div>
                            <div className="pt-3">
                                <label htmlFor="dob">Email</label>
                                <input type="date" id="dob" name="dob" className="border-2 w-full p-2 rounded-md"/>
                            </div>
                            <div className="pt-3">
                                <label htmlFor="linkdin">Linkdin</label>
                                <input type="url" id="linkdin" name="linkdin" className="border-2 w-full p-2 rounded-md"/>
                            </div>
                        </div>

                        <div className="w-full p-3">
                            <div>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" className="border-2 w-full p-2 rounded-md"/>
                            </div>
                            
                            <div className="pt-3">
                            <label htmlFor="pass">Password</label>
                            <input type="password" id="pass" name="pass" className="border-2 w-full p-2 rounded-md"/>
                            </div>

                            <div className="pt-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" className="border-2 w-full p-2 rounded-md"/>
                            </div>

                            <div className="pt-3">
                                <label htmlFor="language">Language</label>
                                <select className="p-2 border-2 border-inherit w-full rounded-md" id="language">
                                    <option value="">language</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="pt-3">
                                <label htmlFor="uProfile">Avatar</label>
                                <input type="file" id="uProfile" name="uProfile" className="border-2 w-full p-2 rounded-md"/>
                            </div>

                            <div className="pt-3">
                                <label htmlFor="email">Twitter</label>
                                <input type="email" id="email" name="email" className="border-2 w-full p-2 rounded-md"/>
                            </div>
                        </div>
                    </div>

                         <div className="mb-6 px-3">
                            <label htmlFor="about">About</label>
                            <input type="text" id="about" name="about" className="border-2 w-full p-3 rounded-md"/>
                        </div>
                        <div className="px-3">
                            <button className=" rounded-md bg-green-600 text-white py-3 font-semibold w-full">UPDATE </button>
                        </div>
                </form>
            </div>
        </>
    )
};

export default EditProfile;