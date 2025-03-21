  import React, { useEffect, useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import useProfileDetails from "../profile/useProfileDetails";


async function formSubmit(values, setStatus) {
  try {
      const res = await fetch("http://localhost:3001/user/update/" + values._id, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2),
      });

      if (!res.ok) {
          const result = await res.json();
          setStatus({ msg: "Error: " + result.message, sent: false });
          return;
      }      

      const result = await res.json();
      setStatus({ msg: result.message, sent: true });
  } catch (error) {
      setStatus({ msg: "Error: " + error.message, sent: false });
      console.error("Error", error);
  }
}




const EditProfile = () => {
  const [status,setStatus] = useState(null);

    
    const profileDetails = useProfileDetails();
    
    if(!profileDetails && !useFormik) {
        return <h1>Loading..</h1>;
    }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: profileDetails?._id || "",
      fname: profileDetails?.fname || "",
      lname: profileDetails?.lname || "",
      email: profileDetails?.email || "",
      // password: profileDetails?.abcpassword || "",
      phone: profileDetails?.phone || "",
      address: profileDetails?.address || "",
      gender: profileDetails?.gender || "",
      language: profileDetails?.language || "",
      dob: profileDetails?.dob || "",
      linkedin: profileDetails?.linkedin || "",
      about: profileDetails?.about || "",
      created: "today",
      },validationSchema: Yup.object({
      fname: Yup.string().required('This is a required field'),
      lname: Yup.string().required('This is a required field'),
      email: Yup.string().email('Invalid email address').required('This is a required field'),
      // password: Yup.string().min(8, 'Password must be at least 8 characters').required('This is a required field'),
      phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('This is a required field'),
      address: Yup.string().required('This is a required field'),
      gender: Yup.string().required('This is a required field'),
      language: Yup.string().required('This is a required field'),
      dob: Yup.date().required('This is a required field'),
      linkedin: Yup.string().url('Invalid URL').required('This is a required field'),
      about: Yup.string().required('This is a required field'),
    }),
    onSubmit: (values) => {
      formSubmit(values, setStatus); // Pass values directly without JSON.stringify
    },
  });
  return (
    <div className="text-slate-600">
      <form onSubmit={formik.handleSubmit} className="p-3" method="put">
        <div className="flex">
          <div className="w-full p-3">
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("fname")}
              />
              {formik.touched.fname && formik.errors.fname && <p className="text-red-500">{formik.errors.fname}</p>}
            </div>

            <div className="pt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}
            </div>

            <div className="pt-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && <p className="text-red-500">{formik.errors.phone}</p>}
            </div>

            <div className="pt-3">
              <label htmlFor="gender">Gender</label>
              <select
                className="p-2 border-2 border-inherit w-full rounded-md"
                id="gender"
                {...formik.getFieldProps("gender")}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.gender && formik.errors.gender && <p className="text-red-500">{formik.errors.gender}</p>}
            </div>

            <div className="pt-3">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("dob")}
              />
              {formik.touched.dob && formik.errors.dob && <p className="text-red-500">{formik.errors.dob}</p>}
            </div>

            <div className="pt-3">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("linkedin")}
              />
              {formik.touched.linkedin && formik.errors.linkedin && <p className="text-red-500">{formik.errors.linkedin}</p>}
            </div>
          </div>

          <div className="w-full p-3">
            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("lname")}
              />
              {formik.touched.lname && formik.errors.lname && <p className="text-red-500">{formik.errors.lname}</p>}
            </div>

            {/* <div className="pt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}
            </div> */}

            <div className="pt-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="border-2 w-full p-2 rounded-md"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address && <p className="text-red-500">{formik.errors.address}</p>}
            </div>

            <div className="pt-3">
              <label htmlFor="language">Language</label>
              <select
                className="p-2 border-2 border-inherit w-full rounded-md"
                id="language"
                {...formik.getFieldProps("language")}
              >
                <option value="">Select Language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.language && formik.errors.language && <p className="text-red-500">{formik.errors.language}</p>}
            </div>
          </div>
        </div>

        <div className="mb-6 px-3">
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            name="about"
            className="border-2 w-full p-3 rounded-md"
            {...formik.getFieldProps("about")}
          ></textarea>
        </div>
        {status && status.msg && (
            <>
            <div className="px-3">
              <div className={` ${ status.sent ? "bg-green-100" : "bg-red-100"} border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg`}>
              <p className="font-medium">{ status.sent ? "Success!" : "Error!"}</p>
              <p>{status.msg}</p>
              </div>
            </div>
            </>
        )}

        <div className="px-3 py-5">
          <button type="submit" className="rounded-md bg-green-600 text-white py-3 font-semibold w-full">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
