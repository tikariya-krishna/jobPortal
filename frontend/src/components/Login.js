import React from "react";
import ReactDOM, { createRoot, useFormState } from 'react-dom';
import TitleContaint from "./innerCom/TitleContaint";
import { useFormik, validateYupSchema } from "formik";
import { useState } from "react";
import * as Yup from 'yup';



async function formSubmit(data, setStatus) {
    try {
        const res = await fetch("http://localhost:3001/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });

        const result = await res.json();

        if (!res.ok) {
            setStatus({ msg: result.message, sent: false });
            return false;
        }

        console.info("Token : " + result.token);
        // ✅ Store user data in localStorage
        localStorage.setItem("userToken", JSON.stringify(result.token));
        localStorage.setItem("user", JSON.stringify(result.user));

        setStatus({ msg: "Login Successful!", sent: true });

        // ✅ Redirect to Home Page
        window.location.href = "/"; // Redirect to home page after login

    } catch (error) {
        setStatus({ msg: "Error: " + error.message, sent: false });
        console.error("Error:", error);
    }
}




export default Login = () => {

    const [status, setStatus] = useState(null);
    
        const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                role: '',
            },
            validationSchema: Yup.object({
                email: Yup.string().email('Invalid email address').required('This is a required field'),
                password: Yup.string().min(8, 'Password must be at least 8 characters').required('This is a required field'),
            }),
            onSubmit: values => {
              formSubmit(JSON.stringify(values, null, 2), setStatus);
             
            },
          });

    return(
        <>
        <TitleContaint name={"Log In"} path={"Login"}/>
        <div className="mt-15 mb-5 py-8 max-mobile:mx-10 md:mx-10 lg:m-0">
            <form method="post" className="m-auto md:w-full lg:w-1/2 px-6 py-8 border-2 rounded-md shadow-md" onSubmit={formik.handleSubmit}>
            <input type="email" name="email" placeholder="Email Address" id="mail" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="border-2 p-3 w-full rounded-md mt-2 hover:border-green-800"/>
            {formik.errors.email ? <div className="text-red-700">{formik.errors.email}</div> : null}
            <input type="password" name="password" placeholder="Password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="border-2 p-3 w-full rounded-md mt-5 hover:border-green-800"/>
            {formik.errors.password ? <div className="text-red-700">{formik.errors.password}</div> : null}

            <div className="mt-5 grid grid-cols-2">  
            <div className="text-zinc-600 font-semibold"><label htmlFor="seeker">Job Seeker</label> <input type="radio" name="empType" id="seeker" value="job_seeker" onChange={(e) => formik.setFieldValue("role", e.target.value)} checked={formik.values.role === "job_seeker"}/></div>
            <div className="text-zinc-600 font-semibold"><label htmlFor="provider">Job Provider</label> <input type="radio" name="empType" id="provider" value="job_provider" onChange={(e) => formik.setFieldValue("role", e.target.value)} checked={formik.values.role === "job_provider"}/></div>    
            </div>
        
            <div className="pt-4"><a href="#" className="text-blue-800">Forget Password?</a></div>
                <div className="text-center mt-5">
                        {status && status.msg && (
                            <p className={`alert ${ status.sent ? "alert-success" : "alert-error"}`}>
                                {status.msg}
                            </p>
                        )}
                    <button type="submit" className="font-semibold w-full p-3 border-2 text-white bg-green-600 rounded-md hover:border-green-800 hover:bg-white hover:text-green-800">LOGIN</button>
                </div>

            </form>
        </div>
        </>
    )
};