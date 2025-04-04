import React, { useState, useEffect } from "react";
import TitleContaint from './innerCom/TitleContaint.js';
import JobPost from "./innerCom/JobPost.js";
import axios from 'axios';

const Jobs = () => {
    // State for filters
    const [searchText, setSearchText] = useState("");
    const [locationText, setLocationText] = useState("");
    const [salary, setSalary] = useState("");
    const [jobType, setJobType] = useState("");
    const [designation, setDesignation] = useState("");
    const [experience, setExperience] = useState("");

    // Job Data
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    // Fetch Jobs from API
    useEffect(() => {
        axios.get('http://localhost:3001/jobs')
            .then((response) => {
                setJobs(response.data);
                setFilteredJobs(response.data); // Initially, show all jobs
            })
            .catch((error) => console.log("Error fetching jobs:", error));
    }, []);

    // Filter Jobs whenever a filter changes
    useEffect(() => {
        const filtered = jobs.filter((job) => {
            return (
                (searchText === "" || job.company_name.toLowerCase().includes(searchText.toLowerCase())) &&
                (locationText === "" || job.address.toLowerCase().includes(locationText.toLowerCase())) &&
                (salary === "" || job.salary === salary) &&
                (jobType === "" || job.job_type === jobType) &&
                (designation === "" || job.category === designation) &&
                (experience === "" || job.experience === experience)
            );
        });

        setFilteredJobs(filtered);
    }, [searchText, locationText, salary, jobType, designation, experience, jobs]);

    return (
        <>
            <TitleContaint name={"Browse Job"} path={"Browse Job"} />
            <div className="xl:flex justify-center md:block lg:flex">
                
                {/* Filters */}
                <div className="p-10 md:grid md:grid-cols-2 xl:grid-cols-none lg:grid-cols-none self-start">
                    <div className="border-2 w-64 p-3 overflow-y-auto rounded-md shadow-md self-start">
                        <input 
                            type="text" 
                            name="search" 
                            placeholder="Search Keywords" 
                            className="w-full border-2 p-2 mb-4 rounded-md"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="location" 
                            placeholder="All Location"  
                            className="w-full border-2 p-2 rounded-md"
                            value={locationText}
                            onChange={(e) => setLocationText(e.target.value)}
                        />
                    </div>

                    {/* Salary */}

                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5 self-start">
                     <p className="text-xl font-semibold text-slate-700 mb-2">Offered Salary</p><hr/>
                     <div className="text-slate-600 pt-2">
                         <div className="border-b-2 border-dashed"><input type="radio" name="salary" value="Under 10000" onChange={(e) => setSalary(e.target.value)}/> Under $10,000</div>
                         <div className="border-b-2 border-dashed"><input type="radio" name="salary" value="10000-15000" onChange={(e) => setSalary(e.target.value)}/> $10,000 - $15,000</div>
                         <div className="border-b-2 border-dashed"><input type="radio" name="salary" value="15000-20000" onChange={(e) => setSalary(e.target.value)}/> $15,000 - $20,000</div>
                         <div className="border-b-2 border-dashed"><input type="radio" name="salary" value="20000-25000" onChange={(e) => setSalary(e.target.value)}/> $20,000 - $25,000</div>
                         <div className="border-b-2 border-dashed"><input type="radio" name="salary" value="25000-30000" onChange={(e) => setSalary(e.target.value)}/> $25,000 - $30,000</div>
                    </div>
                </div>

                    {/* Job Type */}
                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5 self-start">
                        <p className="text-xl font-semibold text-slate-700 mb-2">Job Type</p><hr/>
                        <div className="text-slate-600 pt-2">
                            <div className="border-b-2 border-dashed"><input type="radio" name="jobType" value="full_time" onChange={(e) => setJobType(e.target.value)} /> Full Time</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="jobType" value="part_time" onChange={(e) => setJobType(e.target.value)} /> Part Time</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="jobType" value="internship" onChange={(e) => setJobType(e.target.value)} /> Internship</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="jobType" value="placement" onChange={(e) => setJobType(e.target.value)} /> Placement</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="jobType" value="fresher" onChange={(e) => setJobType(e.target.value)} /> Fresher</div>
                            <div className="border-b-2 border-dashed"><input type="radio" name="jobType" value="contract" onChange={(e) => setJobType(e.target.value)} /> Contract Based</div>
                        </div>
                    </div>

                    {/* Designation */}
                    <div className="border-2 w-64 p-3 rounded-md shadow-md mt-5 self-start">
                        <p className="text-xl font-semibold text-slate-700 mb-2">Designation</p><hr/>
                        <div className="text-slate-600 pt-2">
                            <div className="border-b-2 border-dashed"><input type="radio" name="designation" value="Web Designer" onChange={(e) => setDesignation(e.target.value)} /> Web Designer</div>
                        </div>
                    </div>
                </div>

                {/* Job List */}
                <div className="xl:w-7/12 lg:w-full lg:me-5 pt-10">
                    <JobPost jobs={filteredJobs} />
                </div>

            </div>
        </>
    );
};

export default Jobs;
