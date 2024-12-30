import express from "express"; 
import { Company } from "../models/company.js";

const router = express.Router();

// Route for save a new company
router.post('/', async (req,res)=>{
    try{
        if(!req.body.id || !req.body.name || !req.body.type || !req.body.description || !req.body.addres){
            return res.status(400).send({message: 'send all required fields',});
        }
        const newCompany = {
            id: req.body.id ,
            name: req.body.name,
            type: req.body.type,
            description : req.body.description,
            addres: req.body.addres,
            status: req.body.status
        };
        const company = await Company.create(newCompany);
        return res.status(201).send(company);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});  
    }
});

// Route for get all company from database
router.get('/', async (req,res)=>{
    try{
        const company = await Company.find({});

        return res.status(200).json(company);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route for get one user from database
router.get('/:id', async (req,res)=>{
    try{
        const { id } = req.params;
        const company = await Company.findById(id);
        return res.status(200).json(company);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route for update a user
router.put('/:id', async (req,res)=>{
    try{
        if(!req.body.id || !req.body.name || !req.body.type || !req.body.description || !req.body.addres || !req.body.status){
            return res.status(400).send({message: 'send all required fields',});
        }
       

        const {id} = req.params;
        const result = await Company.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).json({message: 'User not found'});
        }
    
        return res.status(200).send({message:'User Update Successfully'});    
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// // // Route for delete one user from database
// // route.get('/user/:id', async (req,res)=>{
// //     try{
// //         const{id} = res.params;

// //         const result = await User.findByIdAndDelete(id);
// //         if(!result){
// //             return res.status(400).json({message: 'user not found'});
// //         }

// //         return res.status(200).send({message: 'user delete succesfully'});
// //     }catch(error){
// //         console.log(error.message);
// //         return res.status(500).send({message: error.message});
// //     }
// // });

export default router;