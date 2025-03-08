
import React from "react";
import TitleContaint from "./innerCom/TitleContaint";
import { useFormik, validateYupSchema } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

async function formSubmit(data, setStatus) {
    try {
        const res = await fetch("http://localhost:3001/user/register", { // Ensure correct backend port
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Fix: Specify JSON format
            },
            body: data,
        });
    
        if (!res.ok) {
            const result = await res.json();
            var errMsg = result.message;
            setStatus({ msg: "Error: " + errMsg, sent: false });
            return false;
            //throw new Error(`HTTP error! Status: ${res.status}`);
        }
    
        const result = await res.json();
        setStatus({ msg: "Registration Successful!", sent: true });
        return true;
    } catch (error) {
        setStatus({ msg: "Error: " + error.message, sent: false });
        console.error("Error:", error);
    }
}

export default Registration = () =>{

    const [status, setStatus] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            phone: '',
            role: '',
            created: '15/02/2025 12:12:00 AM'
                
        },
        validationSchema: Yup.object({
            name: Yup.string().required('This is a required field'),
            email: Yup.string().email('Invalid email address').required('This is a required field'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('This is a required field'),
            cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('This is a required field'),
            phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('This is a required field'),
        }),
        onSubmit: async (values, { resetForm }) => { 
            const success = await formSubmit(JSON.stringify(values, null, 2), setStatus);
            
            if (success) {
                resetForm(); // ✅ Clear form after successful registration
            }
        },
      });

    return (
        <>
            <TitleContaint name={"Create an Account"} path={"Registration"} />
            <div className="mt-15 mb-5 py-8 max-sm:mx-5">
                <form method="post" className="m-auto max-sm:w-full w-1/2 px-6 py-6 border-2 rounded-md shadow-md"
                    onSubmit={formik.handleSubmit}>

                    <p className="font-semibold text-3xl text-center mb-6">Register Yourself</p>
                    
                    <div className="xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2">
                        <div className="me-4">
                            <label htmlFor="name" className="text-zinc-600 font-semibold">Name</label><br />
                            <input type="text" name="name" placeholder="Name" id="name"
                                value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800" />
                                {formik.errors.name ? <div className="text-red-700">{formik.errors.name}</div> : null}
                                <input type="hidden" name="created" id="created" value={formik.values.created} />
                        </div>
                        <div className="max-xl:mt-5">
                            <label htmlFor="mail" className="text-zinc-600 font-semibold">Email</label><br />
                            <input type="email" name="email" placeholder="Email" id="mail"
                                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800" />
                                {formik.errors.email ? <div className="text-red-700">{formik.errors.email}</div> : null}
                        </div>
                    </div>

                    <div className="xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 my-6">
                        <div className="me-5">
                            <label htmlFor="pass" className="text-zinc-600 font-semibold">Password</label><br />
                            <input type="password" name="password" id="pass" placeholder="*********"
                                value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800" />
                                {formik.errors.password ? <div className="text-red-700">{formik.errors.password}</div> : null}
                        </div>
                        <div className="me-5 max-xl:mt-5">
                            <label htmlFor="cpass" className="text-zinc-600 font-semibold">Confirm Password</label><br />
                            <input type="password" name="cpassword" id="cpass" placeholder="*********"
                                value={formik.values.cpassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800" />
                                {formik.errors.cpassword ? <div className="text-red-700">{formik.errors.cpassword}</div> : null}
                        </div>
                        <div className="max-xl:mt-5">
                            <label htmlFor="phone" className="text-zinc-600 font-semibold">Phone</label><br />
                            <input type="text" name="phone" id="phone" placeholder="Phone Number"
                                value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className="border-2 p-2 w-full rounded-md mt-2 hover:border-green-800" />
                                {formik.errors.phone ? <div className="text-red-700">{formik.errors.phone}</div> : null}
                        </div>
                    </div>

                        <div className="mt-5 grid grid-cols-2">  
                            <div className="text-zinc-600 font-semibold"><label htmlFor="seeker">Job Seeker</label> <input type="radio" name="empType" id="seeker" value="job_seeker" onChange={(e) => formik.setFieldValue("role", e.target.value)} checked={formik.values.role === "job_seeker"}/></div>
                            <div className="text-zinc-600 font-semibold"><label htmlFor="provider">Job Provider</label> <input type="radio" name="empType" id="provider" value="job_provider" onChange={(e) => formik.setFieldValue("role", e.target.value)} checked={formik.values.role === "job_provider"}/></div>    
                        </div>

                    <div className="text-center mt-5">
                        {status && status.msg && (
                            <p className={`alert ${ status.sent ? "alert-success" : "alert-error"}`}>
                                {status.msg}
                            </p>
                        )}
                        <button type="submit"
                            className="w-full p-3 border-2 text-white bg-green-600 font-semibold rounded-md hover:border-green-800 hover:bg-white hover:text-green-800">
                            SIGN UP
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
}

