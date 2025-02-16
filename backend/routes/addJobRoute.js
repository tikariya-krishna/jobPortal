import express from "express";
import { AddJob } from "../models/addJob.js";

const router = express.Router();

router.post('/' , async (req,res)=>{
    try{
        if( !req.body.job_title || 
            !req.body.company_name || 
            !req.body.category || 
            !req.body.discription || 
            !req.body.salary_range || 
            !req.body.vacancy || 
            !req.body.experiance || 
            !req.body.logo || 
            !req.body.job_type || 
            !req.body.email || 
            !req.body.phone_number || 
            !req.body.address || 
            !req.body.city || 
            !req.body.state || 
            !req.body.country || 
            !req.body.zip_code 
        ){return res.status(400).send({message: 'send all required fields,'});}

        const newJob = {
            job_title : req.body.job_title,
            company_name : req.body.company_name,
            category : req.body.category,
            discription : req.body.discription,
            salary_range : req.body.salary_range,
            vacancy : req.body.vacancy,
            experiance : req.body.experiance,
            logo : req.body.logo,
            job_type : req.body.job_type,
            email : req.body.email,
            phone_number : req.body.phone_number,
            address : req.body.address,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country,
            zip_code : req.body.zip_code
        };
        const jobs = await AddJob.create(newJob);
        return res.status(201).send(jobs);
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
});

router.post('/', (req,res)=>{
    console.log("Hello from add job");
});

export default router;