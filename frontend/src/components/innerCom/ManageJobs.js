import TitleContaint from "./TitleContaint";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from 'axios';

const ManageJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?._id;

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3001/jobs/managejobs/${userId}`)
                .then((response) => {
                    console.log("API Response:", response.data);
                    setJobs(response.data);
                })
                .catch((error) => {
                    console.log("Error fetching jobs:", error);
                });
        }
    }, [userId]);

    const confirmDelete = (id) => {
        setSelectedJobId(id);
        setShowModal(true);
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/jobs/jobDelete/${selectedJobId}`)
            .then(() => {
                console.log("Success");
                setJobs(prevJobs => prevJobs.filter(job => job._id !== selectedJobId));
                setShowModal(false);
            })
            .catch((error) => {
                alert("An error happened");
            });
    };

    return (
        <> 
            <TitleContaint name="Manage Jobs" path="manage jobs"/>
            <div className="mx-10 my-5">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-800 text-white">
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
                            <tr key={index} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                    <span>{ele.job_title}</span>
                                </th>
                                <td className="px-6 py-4">{ele.address}</td>
                                <td className="px-6 py-4">{ele.email}</td>
                                <td className="px-6 py-4">{new Date(ele.createdAt).toLocaleString()}</td>
                                <td className="px-6 py-4"> 
                                    <button className="bg-white me-3 rounded" onClick={() => confirmDelete(ele._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="red">
                                            <path d="M3 6h18v2H3V6zm2 3h14l-1.5 12H6.5L5 9zm5-5h4v2h-4V4zM8 11v7h2v-7H8zm4 0v7h2v-7h-2zm4 0v7h2v-7h-2z"/>
                                        </svg>
                                    </button>
                                    <button className="bg-white rounded">
                                        <Link to={`/addjobs/${ele._id}`} className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="blue">
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

            {/* Delete Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-md shadow-md text-center">
                        <p className="text-lg font-semibold">Are you sure you want to delete this job?</p>
                        <div className="mt-4 flex justify-center gap-4">
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ManageJobs;
