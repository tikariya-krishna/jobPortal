import { useEffect,useState } from "react";

const useJobDetails = (_id) =>{
    const [jobDetails,setJobDetails] = useState(null);
    
    useEffect(()=>{
        if (!_id) {return;}

        const fetchData = async ()=>{
            const response = await fetch("http://localhost:3001/jobs/" + _id);
            if(!response.ok){
                throw new error("Faild");
            }

            const json = await response.json();
            setJobDetails(json);

        } 

        fetchData();
        
    },[]);  


    return jobDetails;
}
export default useJobDetails;