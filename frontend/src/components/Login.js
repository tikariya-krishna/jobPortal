import React from "react";
import ReactDOM, { createRoot } from 'react-dom';
import TitleContaint from "./innerCom/TitleContaint";


function handleButtonClick() {
    const result = confirm("Are you sure you want to proceed?");
}
export default Login = () => {
    return(
        <>
        <TitleContaint/>
        <div className="mt-15 mb-5 py-8">
            <form method="post" className="m-auto w-1/2 px-6 py-8 border-2 rounded-md shadow-md">
            <input type="Email" name="uname" placeholder="Email Address" id="name" className="border-2 p-3 w-full rounded-md mt-2 hover:border-green-800"/>
            <input type="password" name="uname" placeholder="Password" id="name" className="border-2 p-3 w-full rounded-md mt-5 hover:border-green-800"/>

            <div className="mt-5 grid grid-cols-2">  
                <div className="text-zinc-600 font-semibold"><label htmlFor="seeker">Job Seeker</label> <input type="radio" name="empType" id="seeker"/></div>
                <div className="text-zinc-600 font-semibold"><label htmlFor="provider">Job Provider</label> <input type="radio" name="empType" id="provider"/></div>    
            </div>

            <div className="pt-4"><a href="#" className="text-blue-800">Forget Password?</a></div>
                <div className="text-center mt-5">
                    <button onClick={handleButtonClick} className="font-semibold w-full p-3 border-2 text-white bg-green-600 rounded-md hover:border-green-800 hover:bg-white hover:text-green-800">LOGIN</button>
                </div>

            </form>
        </div>
        </>
    )
};