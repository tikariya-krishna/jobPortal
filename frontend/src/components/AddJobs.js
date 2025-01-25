import React from "react";
import TitleContaint from "./innerCom/TitleContaint";
const Addjobs = () => {
    return (
        <>
            <TitleContaint name={"ADD JOBS"} path={"Add Job"} />
            <div className="mt-5 px-40 py-5">
            <form method="post">
                <div className="mt-5 border-2 rounded-md">
                    
                        <div className="bg-gray-700 px-4 py-3 rounded-sm"><p className="text-lg font-semibold text-white">General Information</p></div>
                        <div className="p-5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">Job Title</label>
                                    <input type="text" name="title" id="title" className="border-2 w-full p-2 rounded-md" placeholder="Job Title" />
                                </div>
                                <div>
                                    <label htmlFor="cname" className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                                    <input type="text" name="cname" id="cname" className="border-2 w-full p-2 rounded-md" placeholder="Company Name" />
                                </div>
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Category</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="category">
                                        <option value="mostRecenet">Location</option>
                                        <option value="mostViewed">Information of Techonology</option>
                                        <option value="mostSearch">Hardware</option>
                                        <option value="mostSearch">Machanical</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="discription" className="mb-2 block text-sm font-medium text-gray-700">Discription</label>
                                    <input type="text" name="discription" id="discription" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Discription" />
                                </div>
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Salary Range</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="category">
                                        <option value="range">Salary Range</option>
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
                                    <input type="text" name="experience" id="experience" className="border-2 w-full p-2 rounded-md" placeholder="Experience" />
                                </div>
                                <div>
                                    <label htmlFor="logo" className="mb-2 block text-sm font-medium text-gray-700">Company Logo</label>
                                    <input type="file" name="logo" id="logo" className="border-2 w-full p-2 rounded-md" placeholder="Company Logo" />
                                </div>
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Job Type</label>
                                    <select className="border-2 w-full p-2 rounded-md text-gray-700" id="category">
                                        <option value="mostRecenet">Job Type</option>
                                        <option value="mostViewed">IT</option>
                                        <option value="mostSearch">Hardware</option>
                                        <option value="mostSearch">Machanical</option>
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
                                            <label htmlFor="cmail" className="mb-2 block text-sm font-medium text-gray-700">E-Mail</label>
                                            <input type="email" name="cmail" id="cmail" className="border-2 w-full p-2 rounded-md" placeholder="E-Mail" />
                                        </div>
                                        <div>
                                            <label htmlFor="number" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input type="telephone" name="number" id="number" className="border-2 w-full p-2 rounded-md" placeholder="Phone Number" />
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
                                            <input type="number" name="zip" id="zip" className="border-2 w-full p-2 rounded-md" placeholder="Zip Code" />
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