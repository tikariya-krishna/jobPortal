import React from 'react';
import TitleContaint from './innerCom/TitleContaint.js'
const Contact = () => {
  return (
    <>
    <TitleContaint name={"Get In Touch"} path={"Contact"}  />
    <div className='grid grid-cols-2 mx-40 py-5'>
      <div className='text-gray-600 p-3 me-3'>
        <div className='flex'>
          <div className='me-4 w-full'>
            <label htmlFor='name'>Name:</label><br/>
            <input type='name' id='name' name='name' className='border-2 p-2 rounded-md mt-2 w-full' placeholder='Name'/>
          </div>
          <div className=' w-full'>
            <label htmlFor='email'>Email:</label><br/>
            <input type='email' id='email' name='email' className='border-2 p-2 rounded-md mt-2 w-full' placeholder='Email'/>
          </div>
        </div>

        <div className='mt-4'>
            <label htmlFor='subject'>Subject:</label><br/>
            <input type='text' id='subject' name='subject' className='w-full border-2 p-2 rounded-md mt-2' placeholder='Subject'/>
        </div>

        <div className='mt-4'>
          <label htmlFor='message'>Message:</label><br/>
          <textarea rows={6} id='message' name='message' className='w-full border-2 p-2 rounded-md mt-2' placeholder='Massage'></textarea>
        </div>
        <button className='bg-green-600 text-white text-semibold px-4 py-2 rounded-md'>SEND MESSAGE</button>
      </div>

      <div className='w-full p-3'>
      <iframe className='rounded-md w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15092.204096371997!2d72.8113243017878!3d18.973353865360576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6e893065bd%3A0x9879ebcd3ef31652!2sMumbai%20Central!5e0!3m2!1sen!2sin!4v1738667609575!5m2!1sen!2sin" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </>
  )
}

export default Contact