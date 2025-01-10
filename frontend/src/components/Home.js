import React from "react";
import React, { useState } from "react";
import list2  from "../lists/jobPost.js";


export default Home = () =>{
    
    return(
        <>
        <div className="">
          <header className="h-screen bg-background-image bg-cover" id="home">
            <div className="container mx-auto px-64 py-64">
              <h1 className="text-6xl font-semibold text-white pb-4">Search Between More <br/> Then <span className="text-green-600">50,000</span> Open Jobs.</h1>

              <div className="pb-4">
                <p className="text-white">Trending Jobs Keywords: <a href="#" className="text-green-600">Web Designer</a>, <a href="#" className="text-green-600">Web Developer</a>, <a href="#" className="text-green-600">iOS Developer</a>, <a href="#" className="text-green-600">Android Developer</a></p>
                 </div>

              <div className="search-bar pb-5">
                <input type="text" placeholder="Search Keywords..."  className="p-3 rounded-l-lg"/>
                <input type="text" placeholder="Location" className="p-3"/>
                <select className="p-3">
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
            <button className="text-white font-semibold px-8 py-2 rounded-md hover:bg-white hover:text-green-800 hover:delay-150 hover:duration-700">Latest Jobs</button>
            <button  className="text-white font-semibold px-8 py-2 rounded-md hover:bg-white hover:text-green-800 hover:delay-150 hover:duration-700">Recent Jobs</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
        {list2.map((ele) => (
          <>
          <div className="grid">
            <div className="grid-cols-2"></div>
            <div className="grid-cols-8">
              <ul>
                <li key={ele.id}>
                <span>{ele.compnayName}</span>
                <img src={ele.compnayLogo} style={{ width: '100px', height: '100px' }} />
                <span>{ele.address}</span>
                </li>
              </ul>
            </div>
            <div className="grid-cols-2"></div>
          </div>
          </>
      ))}
        </div>

      </div>
      </>
    );
};