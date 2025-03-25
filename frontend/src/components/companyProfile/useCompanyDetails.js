import { useState,useEffect } from "react";

const useCompanyDetails = () =>{
   const [companyDetails,setCompanyDetails] = useState(null);
   const token = localStorage.getItem("userToken").replace('"','').replace('"','');
                    
   useEffect(()=>{
    const fetchData = async ()=>{
       const res = await fetch("http://localhost:3001/company/getDetails",{
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
       }); 
       const result = await res.json();
       setCompanyDetails(result);
    }
    fetchData();

   },[]);
    return companyDetails;
}

export default useCompanyDetails;