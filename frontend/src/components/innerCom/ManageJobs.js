import TitleContaint from "./TitleContaint";
// import list from "../../lists/JobPostList";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import {useParams} from "react-router";
import axios from 'axios';

const ManageJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/jobs/managejobs')
            .then((response) => {
                console.log("API Response:", response.data);
                setJobs(response.data); 
            })
            .catch((error) => {
                console.log("Error fetching jobs:", error);
            });
    },[]);

    const { id } = useParams();
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3001/jobs/jobDelete/${id}`)
    .then(() => {
        console.log("Success");
        setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
    })
    .catch((error)=>{
        alert("an error happend");
    })

    }
    return(
        <> 
        <TitleContaint name="Manage Jobs" path="manage jobs"/>
            <div className="mx-10 my-5">
                <div>
                
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Posted</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>    
                    <tbody>
                        {jobs.map((ele, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {/* <img src={ele.logo} alt="Logo" width="39px" height="39px" className="rounded-full" /> */}
                                    <span>{ele.job_title}</span>
                                </th>
                                <td className="px-6 py-4">{ele.address}</td>
                                <td className="px-6 py-4">{ele.email}</td>
                                <td className="px-6 py-4">{new Date(ele.createdAt).toLocaleString()}</td>
                                <td className="px-6 py-4"> 
                                    <button className="bg-white me-3 rounded" onClick={() => handleDelete(ele._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="red" cursor="pointer">
                                            <path d="M3 6h18v2H3V6zm2 3h14l-1.5 12H6.5L5 9zm5-5h4v2h-4V4zM8 11v7h2v-7H8zm4 0v7h2v-7h-2zm4 0v7h2v-7h-2z"/>
                                        </svg>
                                    </button>
                                    <button className="bg-white rounded">
                                    <Link to="/updatejob" className=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="blue" cursor="pointer">
                                        <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zm18.71-11.54c.39-.39.39-1.02 0-1.41l-2.54-2.54a.9959.9959 0 0 0-1.41 0L15.13 4.86l3.75 3.75 2.83-2.83z"/>
                                        </svg>
                                    </Link>
                                    </button>
                                 </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                </div>
            </div>
        </>
    )
}
export default ManageJobs;