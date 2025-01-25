import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import Home from "./components/Home.js";
import Registration from "./components/Registration.js";
import Footer from "./components/Footer.js";
import { BrowserRouter , Routes , Route } from 'react-router';
import Menu from './components/Menu.js'
import Login from "./components/Login.js";
import UserProfile from "./components/UserProfile.js";
import Jobs from "./components/Jobs.js";
import DashBoard from "./components/innerCom/DashBoard.js";
import LogOut from "./components/innerCom/LogOut.js";
import Addjobs from "./components/AddJobs.js";
import CompnayInfo from "./components/CompnayInfo.js";
import JobPostDetail from "./components/innerCom/jobPostDetail.js";

 // react component
 const AppLayout = () =>{
  return( 
     <div>
                        <BrowserRouter>
                            <Menu/>
                              <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/jobs' element={<Jobs/>}/>
                                <Route path='/login' element={<Login/>}/> 
                                <Route path='/userprofile' element={<UserProfile/>}/> 
                                <Route path='/compannyinfo' element={<CompnayInfo/>}/> 
                                <Route path='/dashboard' element={<DashBoard/>}/> 
                                <Route path='/addjobs' element={<Addjobs/>}/>
                                <Route path='/jobpostdeatil' element={<JobPostDetail/>}/>
                                <Route path='/logout' element={<LogOut/>}/> 
                                <Route path='/registration' element={<Registration/>}/>
                              </Routes>
                            <Footer/>
                        </BrowserRouter>
    </div>
  )
 };

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);