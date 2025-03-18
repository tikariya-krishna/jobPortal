import React from "react";
import React, { useState, useEffect } from "react";
import list from "../lists/jobPost.js";
import axios from 'axios';

export default Home = () =>{
    const [jobs , setJobs ] = useState([]);
    // const jobToDisplay = list[job]; 
    
    const [user, setUser] = useState(null); // Store user data

    useEffect(() => {
        //  Get user data from localStorage
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    // const jobToDisplay = list[job];

    useEffect(()=>{
      axios.get('http://localhost:3001/jobs')
          .then((response) => {
              console.log("API Response:", response.data);
              setJobs(response.data); 
          })
          .catch((error) => {
              console.log("Error fetching jobs:", error);
          });
    },[]);

    return(
        <>
        <div className="">
          <header className="h-screen bg-background-image bg-cover flex" id="home">
            <div className="container m-auto w-1/2 lg:w-full lg:px-32 lg:py-32">

             {/* Display User Name  */}
             {user && <h2 className="text-white">Welcome, {user.name}!</h2>}

              <h1 className="sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white pb-4">Search Between More <br/> Then <span className="text-green-600">50,000</span> Open Jobs.</h1>

              <div className="pb-4">
                <p className="text-white">Trending Jobs Keywords: <a href="#" className="text-green-600">Web Designer</a>, <a href="#" className="text-green-600">Web Developer</a>, <a href="#" className="text-green-600">iOS Developer</a>, <a href="#" className="text-green-600">Android Developer</a></p>
                 </div>

              <div className="search-bar pb-5">
                <input type="text" placeholder="Search Keywords..."  className="p-3 rounded-l-lg"/>
                <input type="text" placeholder="Location" className="p-3"/>
                <select className="p-3 border-b border-inherit">
                  <option value="">Category</option>
                  <option value="software">Software</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
                <button className="btn-search p-3 rounded-r-lg bg-green-600 text-white px-6">Search</button>
              </div>
            </div>
          </header>
      </div>

      {/* Lists of job post */}
      <div className="py-5">

        {/* job Post btn */}
        <div className="">
          <div className="bg-green-800 w-80 p-2 flex justify-around m-auto rounded-md">
            <button autoFocus className="text-white font-semibold px-8 py-2 rounded-md hover:bg-white focus:bg-white hover:text-green-800 focus:text-green-800 hover:delay-150 hover:duration-700" onClick={() => setjobs("first")}>Latest Jobs</button>
            <button  className="text-white font-semibold px-8 py-2 rounded-md hover:bg-white focus:bg-white hover:text-green-800 focus:text-green-800 hover:delay-150 hover:duration-700" onClick={() => setjobs("second")}>Recent Jobs</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-3 py-6">
        {jobs.map((ele) => (
          <>
            <div className="border-2 mx-5 py-2 rounded-md shadow-md hover:shadow-lg">
              <ul>
                <li key={ele.id}>
                  <div className="ps-3 mb-7 mt-2"> 
                    <span className="border-2 bg-green-100 text-green-800 border-green-600 font-semibold py-1 px-3 text-xs rounded-md">{ele.job_type}</span>  
                  </div>

                  <div className="flex items-center justify-center">
                    <img src={ele.compnayLogo} style={{ width: '100px', height: '100px' }}/>
                  </div>
                  
                  <div className="text-center my-4">
                    <p className="text-xl font-semibold text-zinc-700">{ele.compnayName}</p>
                    <p className="text-sm text-zinc-500">{ele.address}</p>
                  </div>

                  <div className="flex items-center justify-center  my-4">
                    <button className="border-2 border-green-800 px-4 py-2 rounded-lg text-green-800 hover:text-white hover:bg-green-800 hover:delay-150 hover:duration-500">APPLY NOW</button>
                  </div>
                </li>
              </ul>
            </div>
          </>
      ))}
        </div>

      </div>

      <div className="bg-green-700 bg-newsLetter bg-cover bg-center mb-10">
        <div className="py-16 text-center m-auto lg:w-1/2 max-mobile:w-full">
          <h1 className="text-white font-bold text-3xl mb-3">Subscribe Our Newsletter!</h1>
          <p className="text-white">This is Our Newsletter.This is Our Newsletter.This is Our Newsletter.This is Our Newsletter.This is Our Newsletter.</p>

          <div className="flex justify-between max-mobile:mx-5 sm:mx-32 lg:mx-12 xl:mx-32 m-auto bg-white mt-7 rounded-md ring-offset-1 ring-4 ring-slate-50">
            <p><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
            <input type="email" placeholder="Enter your Email..." className="outline-none text-zinc-500 w-full mx-3"/>
            <div><button className="border-2 border-green-800 font-semibold bg-green-800 px-6 py-2 rounded-lg text-white hover:text-green-800 hover:bg-white hover:delay-150 hover:duration-500">Subscribe</button></div>
          </div>
        </div>
      </div>
      </>
    );
};