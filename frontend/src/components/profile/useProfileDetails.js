import { useState,useEffect } from "react";

const useProfileDetails = () =>{
    const [profileDetails,setProfileDetails] = useState(null);
    const token = localStorage.getItem("userToken").replace('"','').replace('"','');
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch("http://localhost:3001/user/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            });
            
            const result = await res.json();
            setProfileDetails(result);
        }
        fetchData();
    },[]);
    return profileDetails;   
}
export default useProfileDetails;