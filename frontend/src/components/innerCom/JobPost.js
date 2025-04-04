import React from 'react';
import { Link } from "react-router";

const JobPost = ({ jobs }) => {
    return (
        <div className='text-slate-700 md:mx-5 lg:mx-0 mobile:mx-3'>
            <div className='flex mb-7 justify-between'>
                <p className='pt-2 text-xl font-bold'>Jobs & Vacancies</p>
            </div>

            <div>
                {jobs.length === 0 ? <p>No jobs found</p> : jobs.map((ele) => (
                    <div className='border-2 rounded-md p-3 mb-5 shadow-md'>
                                     <ul>
                                       <li>
                                      
                                         <div className='flex mb-3'>
                                           {/* <img  alt='LOGO'width={"55px"} height={"55px"} className='rounded-full'/> */}
                                           <div className='  ms-5'>
                                             <p className='font-bold text-xl'>{ele.job_title}</p><p>{ele.category}</p>
                                           </div>
                                         </div>
                    
                                         <hr/>
                    
                                         <div className='mobile:block md:flex justify-between w-full mt-3'>
                                           <div className='flex'>
                                             <div className='me-10'>
                                               <ul>
                                                 <li>Job Id</li>
                                                 <li className='pt-2'>Job Type</li>
                                                 <li className='pt-2'>skill</li>
                                                 <li className='pt-2'>experiance</li>
                                                 <li className='pt-2'>Location</li>
                                               </ul>
                                             </div>
                    
                                             <div className='w-96 align-left'>
                                               <ul>
                                                 <li>{ele.company_name}</li>
                                                 <li className='pt-2'>{ele.job_type}</li>
                                                 <li className='pt-2'><span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold rounded-md'>{ele.category}</span></li> 
                                                 <li className='pt-2'>{ele.experiance} Year</li>
                                                 <li className='pt-2'>{ele.address}</li>
                                               </ul>
                                             </div>
                                           </div>
                    
                                             <div className='mobile:text-center'>
                                               <div className='mt-5 mobile:flex mobile:justify-around md:block'>
                                                 <Link to={`/jobs/jobpostdeatil/${ele._id}`} className=' text-center block border-2 mobile:mb-0 border-green-800 font-semibold bg-green-800 w-40 py-2 md:mb-4 shadow-md rounded-lg text-white hover:text-green-800 hover:bg-white hover:delay-150 hover:duration-500'>APPLY NOW</Link><br/>
                                                 <Link to={`/jobs/jobpostdeatil/${ele._id}`} className=' block text-center px-6 py-2 bg-slate-300 font-semibold rounded-lg text-black shadow-md'>VIEW Details</Link>
                                               </div>
                                             </div>
                                           </div>
                                       </li>
                                     </ul>
                                   </div>
                    
                ))}
            </div>
        </div>
    );
};

export default JobPost;
