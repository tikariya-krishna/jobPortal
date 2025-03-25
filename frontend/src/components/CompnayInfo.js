import React, { use } from "react";
import TitleContaint from "./innerCom/TitleContaint";
import ProfileDetails from "./innerCom/ProfileDetails";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import useCompanyDetails from "./companyProfile/useCompanyDetails";


async function formSubmit(values,setStatus, formik) {
  try {
    console.log(values);
    console.log(values.company_id);
    var url = "http://localhost:3001/company/addCompany";
    var methodCall = "POST";

    if(values.company_id){
      url = "http://localhost:3001/company/updateCompany/" + values.company_id;
      methodCall = "PUT";
    }

    const res = await fetch(url ,{
      method: methodCall,
      headers:{
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



  formik.setFieldValue("company_id", result._id);

  } catch (error) {
    console.log(error);
  }
  
}
const CompnayInfo = () => {
  const [status, setStatus] = useState(null);

  const profileDetails = useCompanyDetails();
  if(!profileDetails && !useFormik) {
    return <h1>Loading..</h1>;
  }

  const companyDetails = profileDetails?.company;
  const userDetails = profileDetails?.user;

  console.log(companyDetails);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      user_id: userDetails?._id || "",
      company_id : companyDetails?._id || "",
      cname: companyDetails?.cname ||"",
      tagline: companyDetails?.tagline ||"",
      category: companyDetails?.category ||"",
      owner_name: companyDetails?.owner_name ||"",
      established: companyDetails?.established ||"",
      email: userDetails?.email ||"",
      phone_number: companyDetails?.phone_number ||"",
      ladline: companyDetails?.ladline ||"",
      wlink: companyDetails?.wlink ||"",
      address: companyDetails?.address ||"",
      city: companyDetails?.city ||"",
      state: companyDetails?.state ||"",
      country: companyDetails?.country ||"",
      zip: companyDetails?.zip ||"",
      employees: companyDetails?.employees ||"",
      working: companyDetails?.working ||"",
      secondAdd: companyDetails?.secondAdd ||"",
      summrey: companyDetails?.summrey ||"",
    },
    validationSchema: yup.object({
      cname: yup.string().required("Company Name is required"),
      tagline: yup.string().required("Company Tagline is required"),
      category: yup.string().required("Category is required"),
      owner_name: yup.string().required("Owner Name is required"),
      established: yup.string().required("Established Date is required"),
      email: yup.string().email("Invalid email format").required("E-Mail is required"),
      phone_number: yup.string().matches(/\d{10}/, "Phone Number must be 10 digits").required("Phone Number is required"),
      ladline: yup.string().matches(/\d+/, "Invalid Landline Number"),
      wlink: yup.string().url("Invalid URL"),
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      country: yup.string().required("Country is required"),
      zip: yup.string().matches(/\d{5,6}/, "Invalid Zip Code").required("Zip Code is required"),
      employees: yup.number().positive().integer().required("Number of Employees is required"),
      working: yup.string().required("Working Time is required"),
      summrey: yup.string().required("Company Summary is required"),
    }),
    onSubmit: (values) => {
      formSubmit(values,setStatus, formik);
    },
  });
  
  return (
    <>
      <TitleContaint name={"Company Profile"} path="companyProfile" />
      <div className="py-20 md:flex justify-center mx-38">
        <div className="me-7">
          <ProfileDetails />
        </div>

        <div>
        <form method="post" className="p-5" onSubmit={formik.handleSubmit}>
          <div className="mt-5 border-2 rounded-md">
            <div className="bg-gray-700 px-4 py-3 rounded-sm">
              <p className="text-lg font-semibold text-white">General Information</p>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <input type="hidden" name="user_id" value={formik.values.user_id} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                  <input type="hidden" name="company_id" value={formik.values.company_id} onChange={formik.handleChange} onBlur={formik.handleBlur}/> 
                  <label htmlFor="cname" className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="cname"
                    id="cname"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Company Name"
                    value={formik.values.cname} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.cname && formik.errors.cname && (
                    <p className="text-red-500 text-sm">{formik.errors.cname}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="tagline" className="mb-2 block text-sm font-medium text-gray-700">Company Tagline</label>
                  <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Company Tagline"
                    value={formik.values.tagline} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.tagline && formik.errors.tagline && (
                    <p className="text-red-500 text-sm">{formik.errors.tagline}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Category</label>
                  <select
                    name="category"
                    id="category"
                    className="border-2 w-full p-2 rounded-md text-gray-700"
                    value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  >
                    <option value="">Select Category</option>
                    <option value="mostRecenet">Location</option>
                    <option value="mostViewed">Information of Technology</option>
                    <option value="mostSearch">Hardware</option>
                    <option value="mostSearch">Mechanical</option>
                  </select>
                  {formik.touched.category && formik.errors.category && (
                    <p className="text-red-500 text-sm">{formik.errors.category}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="user_id" className="mb-2 block text-sm font-medium text-gray-700">Owner Name</label>
                  <input
                    type="text"
                    name="owner_name"
                    id="owner_name"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Owner Name"
                    value={formik.values.owner_name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.user_id && formik.errors.user_id && (
                    <p className="text-red-500 text-sm">{formik.errors.user_id}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="established" className="mb-2 block text-sm font-medium text-gray-700">Established</label>
                  <input
                    type="text"
                    name="established"
                    id="established"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Established"
                    value={formik.values.established} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.established && formik.errors.established && (
                    <p className="text-red-500 text-sm">{formik.errors.established}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 border-2 rounded-md">
            <div className="bg-gray-700 px-4 py-3 rounded-sm">
              <p className="text-lg font-semibold text-white">Company Address</p>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="E-Mail"
                    value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="number" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="telephone"
                    name="phone_number"
                    id="phone_number"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Phone Number"
                    value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone_number && formik.errors.phone_number && (
                    <p className="text-red-500 text-sm">{formik.errors.phone_number}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="ladline" className="mb-2 block text-sm font-medium text-gray-700">Landline</label>
                  <input
                    type="telephone"
                    name="ladline"
                    id="ladline"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Landline"
                    value={formik.values.ladline} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.ladline && formik.errors.ladline && (
                    <p className="text-red-500 text-sm">{formik.errors.ladline}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="wlink" className="mb-2 block text-sm font-medium text-gray-700">Website Link</label>
                  <input
                    type="url"
                    name="wlink"
                    id="wlink"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Website Link"
                    value={formik.values.wlink} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.wlink && formik.errors.wlink && (
                    <p className="text-red-500 text-sm">{formik.errors.wlink}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="border-2 w-full p-2 rounded-md text-gray-700"
                    placeholder="Address"
                    value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-sm">{formik.errors.address}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="City"
                    value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500 text-sm">{formik.errors.city}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="State"
                    value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.state && formik.errors.state && (
                    <p className="text-red-500 text-sm">{formik.errors.state}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="border-2 w-full p-2 rounded-md text-gray-700"
                    placeholder="Country"
                    value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.country && formik.errors.country && (
                    <p className="text-red-500 text-sm">{formik.errors.country}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="zip" className="mb-2 block text-sm font-medium text-gray-700">Zip Code</label>
                  <input
                    type="number"
                    name="zip"
                    id="zip"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Zip Code"
                    value={formik.values.zip} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.zip && formik.errors.zip && (
                    <p className="text-red-500 text-sm">{formik.errors.zip}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="employees" className="mb-2 block text-sm font-medium text-gray-700">Employees</label>
                  <input
                    type="number"
                    name="employees"
                    id="employees"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Employees"
                    value={formik.values.employees} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.employees && formik.errors.employees && (
                    <p className="text-red-500 text-sm">{formik.errors.employees}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="working" className="mb-2 block text-sm font-medium text-gray-700">Working Time</label>
                  <input
                    type="number"
                    name="working"
                    id="working"
                    className="border-2 w-full p-2 rounded-md text-gray-700"
                    placeholder="Working Time"
                    value={formik.values.working} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.working && formik.errors.working && (
                    <p className="text-red-500 text-sm">{formik.errors.working}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="secondAdd" className="mb-2 block text-sm font-medium text-gray-700">Address 2</label>
                  <input
                    type="text"
                    name="secondAdd"
                    id="secondAdd"
                    className="border-2 w-full p-2 rounded-md"
                    placeholder="Address 2"
                    value={formik.values.secondAdd} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  />
                  {formik.touched.secondAdd && formik.errors.secondAdd && (
                    <p className="text-red-500 text-sm">{formik.errors.secondAdd}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 border-2 rounded-md">
            <div className="bg-gray-700 px-4 py-3 rounded-sm">
              <p className="text-lg font-semibold text-white">Company Summary</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700">About Company</p>
              <div className="text-gray-700 py-4">
                <select className="p-3 me-2">
                  <option>Normal text</option>
                  <option>Heading 1</option>
                  <option>Heading 2</option>
                </select>
                <button className="text-bold p-3 mx-2" id="textBold">Bold</button>
                <button className="italic p-3 mx-2">Italic</button>
                <button className="underline p-3 mx-2">Underline</button>
              </div>
              <textarea
                rows={6}
                className="w-full border-2 rounded-md"
                id="summrey"
                name="summrey"
                placeholder="Company Summary"
                value={formik.values.summrey} onChange={formik.handleChange} onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.summrey && formik.errors.summrey && (
                <p className="text-red-500 text-sm">{formik.errors.summrey}</p>
              )}
            </div>
          </div>

          <div className="max-w-lg mt-8">
          {status && status.msg && (
            <>
            <div className={` ${ status.sent ? "bg-green-100" : "bg-red-100"} border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg`}>
            <p className="font-medium">{ status.sent ? "Success!" : "Error!"}</p>
            <p>{status.msg}</p>
            </div>
            </>
        )}
            
          
          
          
          </div>
            <button className="w-full text-white font-semibold bg-green-500 rounded-md p-3 mt-3" type="submit">Submit</button>

        </form>
          </div>
      </div>
    </>
  );          

};

export default CompnayInfo;
