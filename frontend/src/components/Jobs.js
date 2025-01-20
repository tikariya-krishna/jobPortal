import React from "react";
import TitleContaint from './innerCom/TitleContaint.js'
import JobPost from "./innerCom/JobPost.js";
const Jobs = () =>{
    return(
        <>
            <TitleContaint/>
            <div className="xl:flex justify-center md:block lg:flex">
                <div className="p-10 md:grid md:grid-cols-2 xl:grid-cols-none lg:grid-cols-none">
                    <div className="border-2 w-64 p-3 rounded-md shadow-md">
                        <input type="text" name="search" placeholder="Search Keywords" className="w-full border-2 p-2 mb-4 rounded-md"/>
                        <input type="text" name="location" placeholder="All Location"  className="w-full border-2 p-2 rounded-md"/>
                    </div>
                    
                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5">
                        <p className="font-xl font-semibold text-slate-700 mb-2">Offerd Salary</p><hr/>

                        <div className="text-slate-600 pt-2">
                            <div className="border-b-2 border-dashed"><input type="radio" name="salary"/> Under $10,000</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="salary"/> $10,000 - $15,000</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="salary"/> $15,000 - $20,000</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="salary"/> $20,000 - $25,000</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="salary"/> $25,000 - $30,000</div>
                        </div>
                    </div>



                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5">
                        <p className="font-xl font-semibold text-slate-700 mb-2">Job Type</p><hr/>
                        <div className="text-slate-600 pt-2">
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Full Time</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Part Time</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Internship</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Fresher</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Contract Base</div>
                        </div>
                    </div>


                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5">
                        <p className="font-xl font-semibold text-slate-700 mb-2">Designation</p><hr/>
                        <div className="text-slate-600 pt-2">
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> web Designer</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Php Developer</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Project Manager</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Human Resource</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> CMS Developer</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> App Developer</div>
                        </div>
                    </div>


                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5">
                        <p className="font-xl font-semibold text-slate-700 mb-2">Excprince</p><hr/>
                        <div className="text-slate-600 pt-2">
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> 1year to 2year</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> 2year to 3year</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> 3year to 4year</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> 4year to 5year</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> 5year to 7year</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> 7year to 10year</div>
                        </div>
                    </div>

                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5">
                        <p className="font-xl font-semibold text-slate-700 mb-2">Qualification</p><hr/>
                        <div className="text-slate-600 pt-2">
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> High School</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Intermediate</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Graduation</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="type"/> Master Degree</div>
                        </div>
                    </div>
                </div>

                <div className="xl:w-7/12 lg:w-full lg:me-5 pt-10"><JobPost/></div>

            </div>
        </>
    )
}
export default Jobs;