import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import TitleContaint from "./innerCom/TitleContaint";

function handleButtonClick() {
    const result = confirm("Are you sure you want to proceed?");
}

export default Registration = () =>{

    return(
        <>
        <TitleContaint name={"Create an Account"} path={"Registration"} />
        <div className="mt-15 mb-5 py-8 max-sm:mx-5">
            <form method="post" className="m-auto max-sm:w-full w-1/2 px-6 py-8 border-2 rounded-md shadow-md">

                <div className="xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2">
                    <div className="me-4">
                        <label for="name" className="text-zinc-600 font-semibold">Name</label><br/>
                        <input type="text" name="uname" placeholder="Name" id="name" className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800"/>
                    </div>
                    <div  className="max-xl:mt-5">
                        <label for="mail" className="text-zinc-600 font-semibold">Email</label><br/>
                        <input type="email" name="mail" placeholder="Email" id="mail" className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800"/>
                    </div>
                </div>

                <div className="xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 my-6">
                    <div className="me-5">
                        <label for="pass" className="text-zinc-600 font-semibold">Password</label><br/>
                        <input type="password" name="Password" id="pass" placeholder="*********" className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800"/>
                    </div>
                    <div  className="me-5 max-xl:mt-5">
                        <label for="cpass" className="text-zinc-600 font-semibold">Confirm Password</label><br/>
                        <input type="password" name="mail" id="cpass" placeholder="*********" className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800"/>
                    </div>
                    <div  className="max-xl:mt-5">
                        <label for="phone" className="text-zinc-600 font-semibold">Phone</label><br/>
                        <input type="phone" name="Phone" id="phone" placeholder="Phone Number" className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800"/>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button onClick={handleButtonClick} className="w-full p-3 border-2 text-white bg-green-600 rounded-md hover:border-green-800 hover:bg-white hover:text-green-800">SIGN UP</button>
                </div>

            </form>
        </div>
        </>
    );
};