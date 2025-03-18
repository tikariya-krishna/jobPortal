import React, { use } from "react";
import TitleContaint from "./innerCom/TitleContaint";
import { useFormik, validateYupSchema } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import { useParams } from "react-router";
import useJobDetails from "./jobs/useJobDetails";
async function formSubmit(values, setStatus) {
    try {
        var URL = "http://localhost:3001/jobs/add"
        var methodCall = "POST";
        if(values._id) {
            URL = "http://localhost:3001/jobs/updatejob" + values._id;
            methodCall = "PUT";
        }
        const res = await fetch(URL, {
            method: methodCall,
            headers: {
                "Content-Type": "application/json",
            },
            body: values, // Send FormData instead of JSON
        });

        if (!res.ok) {
            const result = await res.json();
            setStatus({ msg: "Error: " + result.message, sent: false });
            return;
        }
        

        const result = await res.json();
        setStatus({ msg: "Job added successfully!", sent: true });
    } catch (error) {
        setStatus({ msg: "Error: " + error.message, sent: false });
        console.error("Error", error);
    }
}


const Addjobs = () => {

    const [status,setStatus] = useState(null);

    const {jobId} = useParams();
    const jobDetails = useJobDetails(jobId);
    if(!jobDetails && !useFormik) {
        return <h1>Loading..</h1>;
    }
    
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            _id: jobDetails?._id || "",
            job_title: jobDetails?.job_title || "",
            company_name: jobDetails?.company_name || "",
            category: jobDetails?.category || "",
            discription: jobDetails?.discription || "",
            salary_range: jobDetails?.salary_range || "",
            vacancy: jobDetails?.vacancy || "",
            experiance: jobDetails?.experiance || "",
            job_type: jobDetails?.job_type || "",
            email: jobDetails?.email || "",
            phone_number: jobDetails?.phone_number || "",
            address: jobDetails?.address || "",
            city: jobDetails?.city || "",
            state: jobDetails?.state || "",
            country: jobDetails?.country || "",
            zip_code: jobDetails?.zip_code || "",
        },
        validationSchema: yup.object({
            job_title: yup.string().required("This is a required field"),
            company_name: yup.string().required("This is a required field"),
            category: yup.string().required("This is a required field"),
            discription: yup.string().required("This is a required field"),
            salary_range: yup.string().required("This is a required field"),
            vacancy: yup.number().required("This is a required field"),
            experiance: yup.number().required("This is a required field"),
            job_type: yup.string().required("This is a required field"),
            email: yup.string().required("This is a required field"),
            phone_number: yup.string().required("This is a required field"),
            address: yup.string().required("This is a required field"),
            city: yup.string().required("This is a required field"),
            state: yup.string().required("This is a required field"),
            country: yup.string().required("This is a required field"),
            zip_code: yup.string().required("This is a required field"),
        }),
        onSubmit: (values) => {
            formSubmit(values, setStatus); // Pass values directly without JSON.stringify
        },
    });

    return (
        <>
            <TitleContaint name={"ADD JOBS"} path={"Add Job"} />
            <div className="mt-5 px-40 py-5">
            <form method="POST" onSubmit={formik.handleSubmit}>
                <div className="mt-5 border-2 rounded-md">
                    
                        <div className="bg-gray-700 px-4 py-3 rounded-sm"><p className="text-lg font-semibold text-white">General Information</p></div>
                        <div className="p-5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    {/* Getting job id */}
                                    <input type="hidden" name="_id" value={formik.values._id} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">Job Title</label>
                                    <input type="text" name="job_title" id="title" className="border-2 w-full p-2 rounded-md" placeholder="Job Title" value={formik.values.job_title} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.job_title ? <div className="text-red-700">{formik.errors.job_title}</div> : null}
                                </div>
                                <div>
                                    <label htmlFor="cname" className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                                    <input type="text" name="company_name" id="cname" className="border-2 w-full p-2 rounded-md" placeholder="Company Name" value={formik.values.company_name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.errors.company_name ? <div className="text-red-700">{formik.errors.company_name}</div> : null}
                                </div>
                                <div> 
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Category</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="category" name="category"  value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                        <option >Category</option>
                                        <option value="IT">Information of Techonology</option>
                                        <option value="Hardware">Hardware</option>
                                        <option value="Machanical">Machanical</option>
                                    </select>
                                    {formik.errors.category ? <div className="text-red-700">{formik.errors.category}</div> : null}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label htmlFor="discription" className="mb-2 block text-sm font-medium text-gray-700">Discription</label>
                                    <input type="text" name="discription" id="discription" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Discription" value={formik.values.discription} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.errors.discription ? <div className="text-red-700">{formik.errors.discription}</div> : null}
                                </div>
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Salary Range</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="salary_range" name="salary_range" value={formik.values.salary_range} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                        <option>Salary Range</option>
                                        <option value="1000">$1000</option>
                                        <option value="2000">$2000</option>
                                        <option value="3000">$3000</option>
                                    </select>
                                    {formik.errors.salary_range ? <div className="text-red-700">{formik.errors.salary_range}</div> : null}
                                </div>
                                <div>
                                    <label htmlFor="vacancy" className="mb-2 block text-sm font-medium text-gray-700">No. of Vacancy</label>
                                    <input type="number" name="vacancy" id="vacancy" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="No. of Vacancy" value={formik.values.vacancy} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.errors.vacancy ? <div className="text-red-700">{formik.errors.vacancy}</div> : null}
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label htmlFor="experience" className="mb-2 block text-sm font-medium text-gray-700">Experience</label>
                                    <input type="text" name="experiance" id="experience" className="border-2 w-full p-2 rounded-md" placeholder="Experience" value={formik.values.experiance} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.errors.experiance ? <div className="text-red-700">{formik.errors.experiance}</div> : null}
                                </div>
                                {/* <div>
                                    <label htmlFor="logo" className="mb-2 block text-sm font-medium text-gray-700">Company Logo</label>
                                    <input type="file" name="logo" id="logo" className="border-2 w-full p-2 rounded-md" placeholder="Company Logo"  value={formik.values.logo} onChange={(event) => formik.setFieldValue("logo", event.currentTarget.files[0])} onBlur={formik.handleBlur}/>
                                    {formik.errors.logo ? <div className="text-red-700">{formik.errors.logo}</div> : null}
                                </div> */}
                                {/* <div>
                                    <label htmlFor="logo" className="mb-2 block text-sm font-medium text-gray-700">
                                        Company Logo
                                    </label>
                                    <input
                                        type="file"
                                        name="logo"
                                        id="logo"
                                        className="border-2 w-full p-2 rounded-md"
                                        onChange={(event) => formik.setFieldValue("logo", event.currentTarget.files[0])}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.logo && <div className="text-red-700">{formik.errors.logo}</div>}
                                </div> */}
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Job Type</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="job_type" name="job_type" value={formik.values.job_type} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                        <option >Job Type</option>
                                        <option value="part_time">Part Time</option>
                                        <option value="full_time">Full Time</option>
                                        <option value="internship">Internship</option>
                                        <option value="placement">Placement</option>
                                    </select>
                                    {formik.errors.job_type ? <div className="text-red-700">{formik.errors.job_type}</div> : null}
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="quaification" className="mb-2 block text-sm font-medium text-gray-700">Quaification Require</label>
                                    <input type="text" name="quaification" id="quaification" className="border-2 w-full p-2 rounded-md" placeholder="Quaification Require" />
                                    
                                </div>
                                <div>
                                    <label htmlFor="skill" className="mb-2 block text-sm font-medium text-gray-700">Skill (Separate with comma)</label>
                                    <input type="text" name="skill" id="skill" className="border-2 w-full p-2 rounded-md" placeholder="Skill" />
                                </div>
                            </div>
                        </div>
                </div>

                <div>
                            <div className="mt-5 border-2 rounded-md">
                                <div className="bg-gray-700 px-4 py-3 rounded-sm"><p className="text-lg font-semibold text-white">Company Address</p></div>
                                <div className="p-5">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">E-Mail</label>
                                            <input type="email" name="email" id="email" className="border-2 w-full p-2 rounded-md" placeholder="E-Mail"  value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            {formik.errors.email ? <div className="text-red-700">{formik.errors.email}</div> : null}
                                        </div>
                                        <div>
                                            <label htmlFor="number" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input type="telephone" name="phone_number" id="number" className="border-2 w-full p-2 rounded-md" placeholder="Phone Number" value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            {formik.errors.phone_number ? <div className="text-red-700">{formik.errors.phone_number}</div> : null}
                                        </div>
                                        <div>
                                            <label htmlFor="wlink" className="mb-2 block text-sm font-medium text-gray-700">Website Link</label>
                                            <input type="url" name="wlink" id="wlink" className="border-2 w-full p-2 rounded-md" placeholder="Website Link" />
                                        </div>

                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">Address</label>
                                            <input type="text" name="address" id="address" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            {formik.errors.address ? <div className="text-red-700">{formik.errors.address}</div> : null}
                                        </div>
                                        <div>
                                            <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-700">City</label>
                                            <input type="text" name="city" id="city" className="border-2 w-full p-2 rounded-md" placeholder="City" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            {formik.errors.city ? <div className="text-red-700">{formik.errors.city}</div> : null}
                                        </div>
                                        <div>
                                            <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-700">State</label>
                                            <input type="text" name="state" id="state" className="border-2 w-full p-2 rounded-md" placeholder="State" value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            {formik.errors.state ? <div className="text-red-700">{formik.errors.state}</div> : null}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                                            <input type="text" name="country" id="country" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Country" value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            {formik.errors.country ? <div className="text-red-700">{formik.errors.country}</div> : null}
                                        </div>
                                        <div>
                                            <label htmlFor="zip" className="mb-2 block text-sm font-medium text-gray-700">Zip Code</label>
                                            <input type="number" name="zip_code" id="zip" className="border-2 w-full p-2 rounded-md" placeholder="Zip Code" value={formik.values.zip_code} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            {formik.errors.zip_code ? <div className="text-red-700">{formik.errors.zip_code}</div> : null}
                                        </div>
                                    </div>

                                </div>
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
                        <button className=" text-white bg-green-600 rounded-md p-3 font-semibold mt-6" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Addjobs






