// import express from "express";
// import multer from "multer";
// import path from "path";
// import { AddJob } from "../models/addJob.js";

// const router = express.Router();

// // Configure Multer for File Uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/"); // Store files in 'uploads' folder
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Rename file
//     }
// });

// const upload = multer({ storage });

// // Route to Add Job with Image Upload
// router.post("/add", upload.single("logo"), async (req, res) => {
//     try {
//         const { job_title, company_name, category, discription, salary_range, vacancy, experiance, job_type, email, phone_number, address, city, state, country, zip_code } = req.body;

//         if (!job_title || !company_name || !category || !discription || !salary_range || !vacancy || !experiance || !job_type || !email || !phone_number || !address || !city || !state || !country || !zip_code) {
//             return res.status(400).json({ message: "All required fields must be provided" });
//         }

//         const logo = req.file ? req.file.filename : null; // Store the filename

//         const newJob = {
//             job_title,
//             company_name,
//             category,
//             discription,
//             salary_range,
//             vacancy,
//             experiance,
//             logo,
//             job_type,
//             email,
//             phone_number,
//             address,
//             city,
//             state,
//             country,
//             zip_code
//         };

//         const job = await AddJob.create(newJob);
//         return res.status(201).json(job);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// export default router;

import express from "express";
import multer from "multer";
import path from "path";
import { AddJob } from "../models/addJob.js";

const router = express.Router();
// const upload = multer({ dest: "uploads/" }); // Save uploaded files in 'uploads' folder

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
            zip_code : req.body.zip_code
        };
        const jobs = await AddJob.create(newJob);
        return res.status(201).send(jobs);
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
});


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Store files in the 'uploads' folder
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Rename file
//     }
// });

// router.post("/upload", upload.single("logo"), (req, res) => {
//     try {
//         console.log(req.file); // Uploaded file info
//         res.json({ message: "File uploaded successfully", file: req.file });
//     } catch (error) {
//         res.status(500).json({ error: "File upload failed" });
//     }
// });


export default router;
