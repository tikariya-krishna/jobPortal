import React from 'react'
import ProfileDetails from './ProfileDetails.js'
import TitleContaint from "./TitleContaint.js";
import logo from '../../lists/jobImg/company_logo_1.png';

const DashBoard = () => {
  return (
    <>
    <TitleContaint/>
    <div className='py-20 flex justify-center mx-38'>
        <div className='me-7'><ProfileDetails/></div>
        <div>
        <div className=''>
              <div className='border-2 rounded-md p-3 mb-5 shadow-md'>
                <ul>
                  <li>
                  
                    <div className='flex mb-3'>
                      <img src={logo} alt='LOGO'width={"55px"} height={"55px"} className='rounded-full'/>
                      <div className='ms-5'>
                        <p className='font-bold text-xl'>Apple LTD</p><p>Software Development</p>
                      </div>
                    </div>

                    <hr/>

                    <div className='flex justify-between w-full mt-3'>
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
                            <li>123</li>
                            <li className='pt-2'>Full time</li>
                            <li className='pt-2'>HTML</li> {/* <li className='pt-2'><span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[0]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[1]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>{ele.skill[2]}</span> <span className='text-green-600 bg-green-100 px-2 py-0.5 font-semibold'>HTML</span></li> */}
                            <li className='pt-2'>4 year</li>
                            <li className='pt-2'>India</li>
                          </ul>
                        </div>

                        <div className=''>
                          <div className='mt-5'>
                            <button className='border-2 border-green-800 font-semibold bg-green-800 w-40 py-2 mb-4 shadow-md rounded-lg text-white hover:text-green-800 hover:bg-white hover:delay-150 hover:duration-500'>APPLY NOW</button><br/>
                            <button className='bg-slate-300 font-semibold px-6 py-2 rounded-lg text-black w-40 shadow-md'>VIEW JOBS</button>
                          </div>
                        </div>
                      </div>

                  </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DashBoard