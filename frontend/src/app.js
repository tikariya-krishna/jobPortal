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
import JobPostDetail from "./components/innerCom/JobPostDetail.js";
import Contact from "./components/Contact.js";
import ManageJobs from "./components/innerCom/ManageJobs.js";
import UpdateJobs from "./components/innerCom/UpdateJob.js";
import JobApplication from "./components/popup_ui/JobApplication.js";

 // react component
 const AppLayout = () =>{
  return( 
     <div>
                        <BrowserRouter>
                            <Menu/>
                              <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/jobs' element={<Jobs/>}/>
                                <Route path="/managejobs" element={<ManageJobs/>}/>
                                <Route path='/login' element={<Login/>}/> 
                                <Route path='/userprofile' element={<UserProfile/>}/> 
                                <Route path='/compannyinfo' element={<CompnayInfo/>}/> 
                                <Route path='/dashboard' element={<DashBoard/>}/> 
                                <Route path='/addjobs/' element={<Addjobs/>}/>
                                <Route path='/addjobs/:jobId' element={<Addjobs/>}/>
                                <Route path='/updatejob' element={<UpdateJobs/>}/>
                                <Route path="/jobs/jobpostdeatil/:id" element={<JobPostDetail/>}/>
                                <Route path="/jobs/jobpostdeatil/application" element={<JobApplication/>}/>
                                <Route path='/logout' element={<LogOut/>}/> 
                                <Route path='/registration' element={<Registration/>}/>
                                <Route path='/contact' element={<Contact/>}/>
                              </Routes>
                            <Footer/>
                        </BrowserRouter>
    </div>
  )
 };

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);