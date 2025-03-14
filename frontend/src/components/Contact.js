//   import React from 'react';
// import TitleContaint from './innerCom/TitleContaint.js'
// import {useFormik} from 'formik'
// const Contact = () => {


//   const formik = useFormik({
//     initialValues:{
//       name : "",
//       email : "",
//       subject : "",
//       message: ""
      
//     }, onSubmit:async(values, { resetForm } ) =>{
//       try{
//         const res =await fetch("http://localhost:3001/user/contact",{
//           method: "POST",
//           headers:{
//             "Content-Type":"application/json",
//           },
//           body: JSON.stringify(values,null,2),
//         });
//         if(!res.ok){
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         const result = await res.json();
//         alert("Successfully Send");
//         resetForm();
//       }catch(error){
//         alert("Error: " + error.message);
//         console.error("Error:", error);
//       }
//     }
//   });
//   return (
//     <>
//     <TitleContaint name={"Get In Touch"} path={"Contact"}  />
    
//     <div className='grid grid-cols-2 mx-40 py-5'>
//       <div className='text-gray-600 p-3 me-3'>
//       <form method='post'  onSubmit={formik.handleSubmit} resetForm>
//         <div className='flex'>
//           <div className='me-4 w-full'>
//             <label htmlFor='name'>Name:</label><br/>
//             <input type='name' id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name='name' className='border-2 p-2 rounded-md mt-2 w-full' placeholder='Name'/>
//           </div>
//           <div className=' w-full'>
//             <label htmlFor='email'>Email:</label><br/>
//             <input type='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' className='border-2 p-2 rounded-md mt-2 w-full' placeholder='Email'/>
//           </div>
//         </div>

//         <div className='mt-4'>
//             <label htmlFor='subject'>Subject:</label><br/>
//             <input type='text' id='subject' value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} name='subject' className='w-full border-2 p-2 rounded-md mt-2' placeholder='Subject'/>
//         </div>

//         <div className='mt-4'>
//           <label htmlFor='message'>Message:</label><br/>
//           <textarea rows={6} id='message' value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} name='message' className='w-full border-2 p-2 rounded-md mt-2' placeholder='Massage'></textarea>
//         </div>
//         <button type="submit" className='bg-green-600 text-white text-semibold px-4 py-2 rounded-md'>SEND MESSAGE</button>
//         </form>
//       </div>

//       <div className='w-full p-3'>
//       <iframe className='rounded-md w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15092.204096371997!2d72.8113243017878!3d18.973353865360576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6e893065bd%3A0x9879ebcd3ef31652!2sMumbai%20Central!5e0!3m2!1sen!2sin!4v1738667609575!5m2!1sen!2sin" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//       </div>
//     </div>
    
//     </>
//   )
// }

// export default Contact




import React from 'react';
import TitleContaint from './innerCom/TitleContaint.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Must be at least 3 characters").required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch('http://localhost:3001/user/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values, null, 2),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        alert('Successfully Sent');
        resetForm();
      } catch (error) {
        alert('Error: ' + error.message);
        console.error('Error:', error);
      }
    },
  });

  return (
    <>
      <TitleContaint name={'Get In Touch'} path={'Contact'} />

      <div className='grid grid-cols-2 mx-40 py-5'>
        <div className='text-gray-600 p-3 me-3'>
          <form method='post' onSubmit={formik.handleSubmit}>
            <div className='flex'>
              <div className='me-4 w-full'>
                <label htmlFor='name'>Name:</label><br />
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='border-2 p-2 rounded-md mt-2 w-full'
                  placeholder='Name'
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className='w-full'>
                <label htmlFor='email'>Email:</label><br />
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='border-2 p-2 rounded-md mt-2 w-full'
                  placeholder='Email'
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className='mt-4'>
              <label htmlFor='subject'>Subject:</label><br />
              <input
                type='text'
                id='subject'
                name='subject'
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full border-2 p-2 rounded-md mt-2'
                placeholder='Subject'
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-500 text-sm">{formik.errors.subject}</div>
              ) : null}
            </div>

            <div className='mt-4'>
              <label htmlFor='message'>Message:</label><br />
              <textarea
                rows={6}
                id='message'
                name='message'
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full border-2 p-2 rounded-md mt-2'
                placeholder='Message'
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm">{formik.errors.message}</div>
              ) : null}
            </div>

            <button type="submit" className='bg-green-600 text-white font-semibold px-4 py-2 rounded-md mt-3'>
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className='w-full p-3'>
          <iframe
            className='rounded-md w-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15092.204096371997!2d72.8113243017878!3d18.973353865360576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6e893065bd%3A0x9879ebcd3ef31652!2sMumbai%20Central!5e0!3m2!1sen!2sin!4v1738667609575!5m2!1sen!2sin"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
