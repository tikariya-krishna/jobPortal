import React from 'react';
import logo from '../../lists/jobImg/company_logo_1.png';
import TitleContaint from './TitleContaint';
import Sidebar from './SideBar';
import list from '../../lists/JobPostList';

const JobPostDetail = () => {
  return (
    <>
      <TitleContaint name={"Job Detail"} path={"Job Detail"}  />
      <div className='mx-60 lg:mx-32 md:mx-10 max-mobile:mx-0 m-auto mt-10 sm:flex max-mobile:block'>
          <div className='left-content'>
              <div className='grid grid-cols-2 justify-left border-2 py-5 rounded-md'>
                <div className='text-center'>
                    <div className='flex justify-center'><img src={logo} alt='LOGO' width={"80px"} height={"80px"} className='rounded-full'/></div>
                    <div className='p-3'><span className='font-bold text-green-600 bg-gray-200 py-1 px-2 rounded-md'>Web Designer</span></div>
                    <p className='text-gray-600'>512 Big Tower, New delhi</p>
                    <button className='bg-green-600 text-white p-2 mt-3 px-6 rounded-md hover:text-green-800 hover:bg-white hover:delay-150 hover:duration-500 border-2 border-green-600'>Apply Now</button>
                </div>


                <div className='border-s text-gray-600 ps-5'>
                  <div className='flex justify-left'>
                        <span><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                        <path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></span>
                        <span className='ms-2'>20K To 50K/mouth</span>
                  </div>
                  <div className='flex justify-left mt-3'>
                        <span><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                        <path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></span>
                        <span className='ms-2'>91 222 331 54 66</span>
                  </div>
                  <div className='flex justify-left mt-3'>
                        <span><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                        <path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></span>
                        <span className='ms-2'>Mail@gmail.com</span>
                  </div>
                  <div className='flex justify-left mt-3'>
                        <span><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                        <path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></span>
                        <span className='ms-2'><span className='font-bold text-green-600 bg-gray-200 py-0.5 px-1.5 rounded-md'>Full Time</span></span>
                  </div>
                  <div className='flex justify-left mt-3'>
                        <span><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                        <path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></span>
                        <span className='ms-2 text-red-600'>7 Open position</span>
                  </div>
                  <div className='flex justify-left mt-3'>
                        <span><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                        <path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></span>
                        <span className='ms-2'>3 Year Exp.</span>
                  </div>

                </div>
              </div>


              <div className='mt-5 border-2 rounded-md'>
                  <p className='bg-gray-700 text-white font-semibold text-xl py-3 px-4'>Job Description</p>
                  <p className='text-gray-600 px-3 py-4'>This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  </p>
              </div>

              <div className='mt-5 border-2 rounded-md'>
                  <p className='bg-gray-700 text-white font-semibold text-xl py-3 px-4'>Job Skill</p>
                  <p className='text-gray-600 px-3 py-4'>This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  </p>
              </div>

              <div className='mt-5 border-2 rounded-md'>
                  <p className='bg-gray-700 text-white font-semibold text-xl py-3 px-4'>Location</p>
                  <p className='text-gray-600 px-3 py-4'>This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  </p>
              </div>

              <div className='mt-5 border-2 rounded-md'>
                  <p className='bg-gray-700 text-white font-semibold text-xl py-3 px-4'>Requirement</p>
                  <p className='text-gray-600 px-3 py-4'>This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  This is job description. This is job description. This is job description. This is job description. This is job description. This is job description. 
                  </p>
              </div>
          </div>
          <div className='right-content ms-5'>
                  <Sidebar/>
          </div>
      </div> 
    </>
  )
}

export default JobPostDetail