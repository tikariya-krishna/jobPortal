import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import React, { useState } from "react";
import "./componentcss/home.css";
import Menu from "./Menu.js";
import Footer from "./Footer.js";

export default Home = () =>{
    
    return(
        <>
        
        
        <Menu/>
        <div className="homepage">
          <header className="hero-section" id="home">
            <div className="hero-content">
              <h1>Search Between More Than <span>50,000</span> Open Jobs</h1>
              <p>Trending Jobs Keywords: <a href="#">Web Designer</a>, <a href="#">Web Developer</a>, <a href="#">iOS Developer</a>, <a href="#">Android Developer</a></p>
              <div className="search-bar">
                <input type="text" placeholder="Search Keywords..." />
                <input type="text" placeholder="Location" />
                <select>
                  <option value="">Category</option>
                  <option value="software">Software</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
                <button className="btn-search">Search</button>
              </div>
            </div>
          </header>

          {/* <section className="featured-jobs" id="jobs">
            <h2>Featured Jobs</h2>
            <div className="jobs-container">
              <div className="job-card">
                <h3>Software Engineer</h3>
                <p>Company: TechCorp</p>
                <p>Location: Remote</p>
                <a href="#" className="btn-apply">Apply Now</a>
              </div>
              <div className="job-card">
                <h3>Data Analyst</h3>
                <p>Company: DataSolutions</p>
                <p>Location: New York, NY</p>
                <a href="#" className="btn-apply">Apply Now</a>
              </div>
              <div className="job-card">
                <h3>Project Manager</h3>
                <p>Company: BuildIt Inc.</p>
                <p>Location: San Francisco, CA</p>
                <a href="#" className="btn-apply">Apply Now</a>
              </div>
            </div>
          </section>

          <section className="employers" id="employers">
            <h2>Employers</h2>
            <p>Find the right talent for your company. Post your jobs and connect with skilled professionals.</p>
            <a href="#" className="btn-primary">Get Started</a>
          </section>

          <section className="candidates" id="candidates">
            <h2>Candidates</h2>
            <p>Explore top job opportunities and take your career to the next level.</p>
            <a href="#" className="btn-secondary">Sign Up</a>
          </section> */}

            <Footer/>
      </div>
      
      
      </>
    );
};