import React from "react";

const EditProfile = () =>{
    return(
        <>
            <div className="w-80">
                <form method="post">
                    <div className="flex justify-stretch">
                        <div className="w-full">
                            <div>
                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="fname" className="border-2"/>
                            </div>

                            <div>
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" className="border-2"/>
                            </div>
                        </div>

                        <div className="w-full">
                            <div>
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" className="border-2"/>
                            </div>
                            
                            <div>
                            <label for="pass">Password</label>
                            <input type="password" id="pass" name="pass" className="border-2"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};

export default EditProfile;