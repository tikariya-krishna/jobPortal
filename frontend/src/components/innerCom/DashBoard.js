import React from 'react'
import ProfileDetails from './ProfileDetails.js'
import TitleContaint from "./TitleContaint.js";
import logo from '../../lists/jobImg/company_logo_1.png';
import { useState, useEffect } from 'react';

const DashBoard = () => {

  const [appliedJobs, setAppliedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                // Get user ID from localStorage
                const userJSON = localStorage.getItem("user");
                if (!userJSON) return;

                const user = JSON.parse(userJSON);
                const res = await fetch(`http://localhost:3001/jobs/applied/${user._id}`);
                
                
                if (!res.ok) {
                    throw new Error("Failed to fetch applied jobs");
                }
                
                const data = await res.json();
                setAppliedJobs(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching applied jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAppliedJobs();
    }, []);


  return (
    <>
    <TitleContaint  name={"Profile Settings"} path={"Profile Settings"}/>
    
    <div className='py-20 flex justify-center mx-38'>
        <div className='me-7'><ProfileDetails/></div>
        <div>

        {loading ? (
          <>
                <div className=''>
                 <div className='border-2 rounded-md p-3 mb-5 shadow-md'>
                 
                   <ul>
                     <li>                  
                       <div className='flex mb-3'>
                         <img  alt='LOGO' width={"55px"} height={"55px"} className='rounded-full'/>
                         <div className='ms-5'>
                           <p className='font-bold text-xl'></p><p></p>
                         </div>
                       </div>
   
                       <hr/>
   
                       <div className='flex justify-between w-full mt-3'>
                           <div className='me-10'>
                             <ul>
                               <li>Job Id</li>
                               <li className='pt-2'>Type</li>
                               <li className='pt-2'>skill</li>
                               <li className='pt-2'>experiance</li>
                               <li className='pt-2'>Location</li>
                             </ul>
                           </div>
   
                           <div className='w-96 align-left'>
                             <ul>
                               <li></li>
                               <li className='pt-2'></li>
                               <li className='pt-2'></li> {/* <li className='pt-2'><span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[0]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[1]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[2]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>HTML</span></li> */}
                               <li className='pt-2'></li>
                               <li className='pt-2'></li>
                             </ul>
                           </div>
   
                           <div className=''>
                             <div className='mt-5'>
                               <p className='border-2 border-green-800 font-bold bg-green-800 w-40 py-2 mb-4 shadow-md rounded-lg text-white text-center '></p><br/>
                               <button className='bg-slate-300 font-semibold px-6 py-2 rounded-lg text-black w-40 shadow-md'></button>
                             </div>
                           </div>
                         </div>
   
                     </li>
                   </ul>
                 
                 </div>
                </div>
                <div className=''>
                <div className='border-2 rounded-md p-3 mb-5 shadow-md'>
                
                  <ul>
                    <li>                  
                      <div className='flex mb-3'>
                        <img  alt='LOGO' width={"55px"} height={"55px"} className='rounded-full'/>
                        <div className='ms-5'>
                          <p className='font-bold text-xl'></p><p></p>
                        </div>
                      </div>
  
                      <hr/>
  
                      <div className='flex justify-between w-full mt-3'>
                          <div className='me-10'>
                            <ul>
                              <li>Job Id</li>
                              <li className='pt-2'>Type</li>
                              <li className='pt-2'>skill</li>
                              <li className='pt-2'>experiance</li>
                              <li className='pt-2'>Location</li>
                            </ul>
                          </div>
  
                          <div className='w-96 align-left'>
                            <ul>
                              <li></li>
                              <li className='pt-2'></li>
                              <li className='pt-2'></li> {/* <li className='pt-2'><span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[0]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[1]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[2]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>HTML</span></li> */}
                              <li className='pt-2'></li>
                              <li className='pt-2'></li>
                            </ul>
                          </div>
  
                          <div className=''>
                            <div className='mt-5'>
                              <p className='border-2 border-green-800 font-bold bg-green-800 w-40 py-2 mb-4 shadow-md rounded-lg text-white text-center '></p><br/>
                              <button className='bg-slate-300 font-semibold px-6 py-2 rounded-lg text-black w-40 shadow-md'></button>
                            </div>
                          </div>
                        </div>
  
                    </li>
                  </ul>
                
                </div>
               </div>
            </>
            ) : appliedJobs.length === 0 ? (
                <p>No applied jobs found.</p>
            ) : (
              appliedJobs.map((jobApp) => (
              <div className=''>
              <div className='border-2 rounded-md p-3 mb-5 shadow-md'>
              
                <ul>
                  <li>                  
                    <div className='flex mb-3'>
                      <img src={logo} alt='LOGO'width={"55px"} height={"55px"} className='rounded-full'/>
                      <div className='ms-5'>
                        <p className='font-bold text-xl'>{jobApp.job_id.company_name}</p><p>{jobApp.job_id.job_title}</p>
                      </div>
                    </div>

                    <hr/>

                    <div className='flex justify-between w-full mt-3'>
                        <div className='me-10'>
                          <ul>
                            <li>Job Id</li>
                            <li className='pt-2'>Type</li>
                            <li className='pt-2'>skill</li>
                            <li className='pt-2'>experiance</li>
                            <li className='pt-2'>Location</li>
                          </ul>
                        </div>

                        <div className='w-96 align-left'>
                          <ul>
                            <li>{jobApp.job_id._id || "N/A"}</li>
                            <li className='pt-2'>{jobApp.job_id.job_type || "N/A"}</li>
                            <li className='pt-2'>HTML</li> {/* <li className='pt-2'><span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[0]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[1]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[2]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>HTML</span></li> */}
                            <li className='pt-2'>{jobApp.job_id.experiance}</li>
                            <li className='pt-2'>{jobApp.job_id.country}</li>
                          </ul>
                        </div>

                        <div className=''>
                          <div className='mt-5'>
                            <p className='border-2 border-green-800 font-bold bg-green-800 w-40 py-2 mb-4 shadow-md rounded-lg text-white text-center '>Applied</p><br/>
                            <button className='bg-slate-300 font-semibold px-6 py-2 rounded-lg text-black w-40 shadow-md'>VIEW JOB</button>
                          </div>
                        </div>
                      </div>

                  </li>
                </ul>
              
              </div>
            </div>
              ))  
            )}
        </div>
    </div>
    </>
  )
}

export default DashBoard