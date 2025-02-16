import React from "react";
import TitleContaint from "./innerCom/TitleContaint";
import { useFormik } from "formik";
const Addjobs = () => {

    const formik = useFormik({
            initialValues:{
                job_title : "",
                company_name : "",
                category : "",
                discription : "",
                salary_range : "",
                vacancy : "",
                experiance : "",
                logo : "",
                job_type : "",
                email : "",
                phone_number : "",
                address : "",
                city : "",
                state : "",
                country : "",
                zip_code : "",
            }, onSubmit: async (values,{resetForm})=>{
                try{
                    const res= await fetch("http://localhost:3000/addjobs",{
                        method: "POST",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body: JSON.stringify(values, null, 2),
                    });
                    if(!res.ok){
                        throw new Error(`HTTP erroe! Status: ${res.status}`);
                    }
                    const result = await res.json();
                    alert("Seccessfully add");
                    resetForm();
                }catch(error){
                    alert("Error: " + error.message);
                    console.log("Error: ",error);
                    
                }
            }
        });
    return (
        <>
            <TitleContaint name={"ADD JOBS"} path={"Add Job"} />
            <div className="mt-5 px-40 py-5">
            <form method="POST">
                <div className="mt-5 border-2 rounded-md">
                    
                        <div className="bg-gray-700 px-4 py-3 rounded-sm"><p className="text-lg font-semibold text-white">General Information</p></div>
                        <div className="p-5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">Job Title</label>
                                    <input type="text" name="job_title" id="title" className="border-2 w-full p-2 rounded-md" placeholder="Job Title" />
                                </div>
                                <div>
                                    <label htmlFor="cname" className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                                    <input type="text" name="company_name" id="cname" className="border-2 w-full p-2 rounded-md" placeholder="Company Name" />
                                </div>
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Category</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="category" name="category">
                                        <option >Category</option>
                                        <option value="IT">Information of Techonology</option>
                                        <option value="Hardware">Hardware</option>
                                        <option value="Machanical">Machanical</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label htmlFor="discription" className="mb-2 block text-sm font-medium text-gray-700">Discription</label>
                                    <input type="text" name="discription" id="discription" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Discription" />
                                </div>
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Salary Range</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="category" name="salary_range">
                                        <option>Salary Range</option>
                                        <option value="1000">$1000</option>
                                        <option value="2000">$2000</option>
                                        <option value="3000">$3000</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vacancy" className="mb-2 block text-sm font-medium text-gray-700">No. of Vacancy</label>
                                    <input type="number" name="vacancy" id="vacancy" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="No. of Vacancy" />
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label htmlFor="experience" className="mb-2 block text-sm font-medium text-gray-700">Experience</label>
                                    <input type="text" name="experiance" id="experience" className="border-2 w-full p-2 rounded-md" placeholder="Experience" />
                                </div>
                                <div>
                                    <label htmlFor="logo" className="mb-2 block text-sm font-medium text-gray-700">Company Logo</label>
                                    <input type="file" name="logo" id="logo" className="border-2 w-full p-2 rounded-md" placeholder="Company Logo" />
                                </div>
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Job Type</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="category" name="job_type">
                                        <option >Job Type</option>
                                        <option value="part_time">Part Time</option>
                                        <option value="full_time">Full Time</option>
                                        <option value="internship">Internship</option>
                                        <option value="placement">Placement</option>
                                    </select>
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
                                            <input type="email" name="email" id="email" className="border-2 w-full p-2 rounded-md" placeholder="E-Mail" />
                                        </div>
                                        <div>
                                            <label htmlFor="number" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input type="telephone" name="phone_number" id="number" className="border-2 w-full p-2 rounded-md" placeholder="Phone Number" />
                                        </div>
                                        <div>
                                            <label htmlFor="wlink" className="mb-2 block text-sm font-medium text-gray-700">Website Link</label>
                                            <input type="url" name="wlink" id="wlink" className="border-2 w-full p-2 rounded-md" placeholder="Website Link" />
                                        </div>

                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">Address</label>
                                            <input type="text" name="address" id="address" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Address" />
                                        </div>
                                        <div>
                                            <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-700">City</label>
                                            <input type="text" name="city" id="city" className="border-2 w-full p-2 rounded-md" placeholder="City" />
                                        </div>
                                        <div>
                                            <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-700">State</label>
                                            <input type="text" name="state" id="state" className="border-2 w-full p-2 rounded-md" placeholder="State" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                                            <input type="text" name="country" id="country" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Country" />
                                        </div>
                                        <div>
                                            <label htmlFor="zip" className="mb-2 block text-sm font-medium text-gray-700">Zip Code</label>
                                            <input type="number" name="zip_code" id="zip" className="border-2 w-full p-2 rounded-md" placeholder="Zip Code" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button className="w-full text-white bg-green-600 rounded-md p-3 font-semibold mt-6">SUBMIT</button>
                </form>
            </div>
        </>
    )
}
export default Addjobs