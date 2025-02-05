import React from 'react'
import list from '../../lists/JobPostList';
import {Outlet,Link} from 'react-router'
const JobPost = () => {
  return (
    <div className='text-slate-700 md:mx-5 lg:mx-0 mobile:mx-3'>
      <div className='flex mb-7 justify-between'>
        <p className='pt-2 text-xl font-bold'>Jobs & Vacancies</p>
        <div>
            <span>Short By </span>
          <select className="p-2 border-2 rounded-md">
              <option value="mostRecenet">Most Recent</option>
              <option value="mostViewed">Most Viewed</option>
              <option value="mostSearch">Most Search</option>
          </select>
        </div>
      </div>

      <div className=''>
        <div className=''>
          {list.map((ele)=>(
            <>
              <div className='border-2 rounded-md p-3 mb-5 shadow-md'>
                <ul>
                  <li>
                  
                    <div className='flex mb-3'>
                      <img src={ele.logo} alt='LOGO'width={"55px"} height={"55px"} className='rounded-full'/>
                      <div className='ms-5'>
                        <p className='font-bold text-xl'>{ele.jobTitle}</p><p>{ele.jobField}</p>
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
                            <li>{ele.jobId}</li>
                            <li className='pt-2'>{ele.jobType}</li>
                            <li className='pt-2'><span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[0]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[1]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[2]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[0]}</span></li>
                            <li className='pt-2'>{ele.experiance}</li>
                            <li className='pt-2'>{ele.location}</li>
                          </ul>
                        </div>
                      </div>

                        <div className='mobile:text-center'>
                          <div className='mt-5 mobile:flex mobile:justify-around md:block'>
                            <button className='border-2 mobile:mb-0 border-green-800 font-semibold bg-green-800 w-40 py-2 md:mb-4 shadow-md rounded-lg text-white hover:text-green-800 hover:bg-white hover:delay-150 hover:duration-500'>APPLY NOW</button><br/>
                            <Link to='/jobpostdeatil' className=' block text-center px-6 py-2 bg-slate-300 font-semibold rounded-lg text-black shadow-md'>VIEW JOBS</Link>
                          </div>
                        </div>
                      </div>

                  </li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobPost