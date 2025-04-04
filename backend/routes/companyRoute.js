import express from "express"; 
import { Company } from "../models/company.js";
import auth from "../middelware/auth.js";
import {User} from '../models/user.js';
import multer from "multer";

const router = express.Router();


router.get('/getDetails', auth, async (req,res)=>{
    const userId = req.user._id;
    
    const company = await Company.findOne({"user_id": userId });
    const response = {
        "user": req.user,
        "company": company
    };
    res.send(response);
    
})


// Route for save a new company
router.post('/addCompany', async (req,res)=>{
    
    try{
        if( !req.body.user_id ||
            !req.body.cname ||
            !req.body.tagline ||
            !req.body.category ||
            !req.body.owner_name ||
            !req.body.established ||
            !req.body.email ||
            !req.body.phone_number ||
            !req.body.ladline ||
            !req.body.address ||
            !req.body.city ||
            !req.body.state ||
            !req.body.country ||
            !req.body.zip ||
            !req.body.employees ||
            !req.body.working ||
            !req.body.summrey
        ){
            return res.status(400).send({message: 'send all required fields',});
        }
        const newCompany = {
            user_id: req.body.user_id,
            cname: req.body.cname ,      
            tagline: req.body.tagline,
            category : req.body.category,
            owner_name: req.body.owner_name,
            established: req.body.established,
            email: req.body.email,
            phone_number: req.body.phone_number,
            ladline: req.body.ladline,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            employees: req.body.employees,
            working: req.body.working,
            summrey: req.body.summrey,
        };
        const company = await Company.create(newCompany);
        return res.status(201).send(company);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});  
    }
});


const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('File must be an image'));
        }
        cb(undefined, true); //cb = a callback fn
    }
});

// Route for update a user
router.put('/updateCompany/:id', async (req,res)=>{
    try{
            if(!req.body.user_id ||
                !req.body.cname ||
                !req.body.tagline ||
                !req.body.category ||
                !req.body.owner_name ||
                !req.body.established ||
                !req.body.email ||
                !req.body.phone_number ||
                !req.body.ladline ||
                !req.body.address ||
                !req.body.city ||
                !req.body.state ||
                !req.body.country ||
                !req.body.zip ||
                !req.body.employees ||
                !req.body.working ||
                !req.body.summrey
            ){
                return res.status(400).send({message: 'send all required fields',});
            }

        const {id} = req.params;
        const result = await Company.findByIdAndUpdate(id,req.body);

        if(!result){
                return res.status(404).json({message: 'Company details not found'});
            }
    
        return res.status(200).send({message:'Company Updated Successfully'});    
    }catch(error){
            console.log(error.message);
            return res.status(500).send({message: error.message});
    }
    

});



// // Route for get all company from database
// router.get('/', async (req,res)=>{
//     try{
//         const company = await Company.find({});

//         return res.status(200).json(company);
//     }catch(error){
//         console.log(error.message);
//         return res.status(500).send({message: error.message});
//     }
// });

// // Route for get one user from database
// router.get('/:id', async (req,res)=>{
//     try{
//         const { id } = req.params;
//         const company = await Company.findById(id);
//         return res.status(200).json(company);
//     }catch(error){
//         console.log(error.message);
//         return res.status(500).send({message: error.message});
//     }
// });



export default router;