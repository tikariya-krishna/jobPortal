import express from "express";
import multer from "multer";
import path from "path";
import { AddJob } from "../models/addJob.js";

const router = express.Router();


router.post('/add' , async (req,res)=>{
    try{

        console.log(req.body);
        if(!req.body.job_title || 
            !req.body.company_name || 
            !req.body.category || 
            !req.body.discription || 
            !req.body.salary_range || 
            !req.body.vacancy || 
            !req.body.experiance || 
            !req.body.job_type || 
            !req.body.email || 
            !req.body.phone_number || 
            !req.body.address || 
            !req.body.city || 
            !req.body.state || 
            !req.body.country ||
            !req.body.user_id || 
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
            //logo : req.body.logo,
            job_type : req.body.job_type,
            email : req.body.email,
            phone_number : req.body.phone_number,
            address : req.body.address,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country,
            zip_code : req.body.zip_code,
            user_id : req.body.user_id,
            createdAt: new Date()
        };
        const jobs = await AddJob.create(newJob);
        return res.status(201).send(jobs);
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
});



// Route for delete one user from database
 router.delete('/jobDelete/:id', async (req,res)=>{
     try{
         
         const { id } = req.params;
 
         const result = await AddJob.findByIdAndDelete(id);
         if(!result){
             return res.status(400).json({message: 'Job not found'});
         }
 
         return res.status(200).send({message: 'job delete succesfully'});
     }catch(error){
         console.log(error.message);
         return res.status(500).send({message: error.message});
     }
 });

router.get('/managejobs/:userId', async (req,res)=>{
    try{
        const { userId } = req.params;
        console.log(userId);
        const addJob = await AddJob.find({"user_id": userId});

        //"user_id": userId

        return res.status(200).json(addJob);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

router.get('/:jobId', async (req, res) => {
    try{
        const { jobId } = req.params;
        const addJob = await AddJob.findOne({_id: jobId});
        
        return res.status(200).json(addJob);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

router.get('/', async (req,res)=>{
    try{
        const addJob = await AddJob.find({});

        return res.status(200).json(addJob);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

router.put('/updatejob/:id', async (req,res)=>{
    try{
        if(!req.body.job_title || 
            !req.body.company_name || 
            !req.body.category || 
            !req.body.discription || 
            !req.body.salary_range || 
            !req.body.vacancy || 
            !req.body.experiance || 
            !req.body.job_type || 
            !req.body.email || 
            !req.body.phone_number || 
            !req.body.address || 
            !req.body.city || 
            !req.body.state || 
            !req.body.country || 
            !req.body.zip_code
        ){return res.status(400).send({message: 'send all required fields,'});}
       

        const {id} = req.params;
        const result = await AddJob.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).json({message: 'Job not found'});
        }
    
        return res.status(200).send({message:'Job Update Successfully'});    
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});





router.get('/jobpostdeatil/:id', async (req,res)=>{
    try{
        const { id } = req.params;
        const showJob = await AddJob.findOne({"_id": id});
        return res.status(200).json(showJob);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});


export default router;
