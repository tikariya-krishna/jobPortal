import express from "express"; 
import {User} from '../models/user.js';

const router = express.Router();

// Route for save a new user
router.post('/', async (req,res)=>{
    try{
        if(!req.body.userId || !req.body.userName || !req.body.password || !req.body.email || !req.body.role || !req.body.created){
            return res.status(400).send({message: 'send all required fields',});
        }
        const newUser = {
            userId: req.body.userId ,
            userName: req.body.userName,
            password: req.body.password,
            email : req.body.email,
            role: req.body.role,
            created: req.body.created
        };
        const user = await User.create(newUser);
        return res.status(201).send(user);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});  
    }
});

// Route for get all user from database
router.get('/', async (req,res)=>{
    try{
        const user = await User.find({});

        return res.status(200).json(user);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route for get one user from database
router.get('/:id', async (req,res)=>{
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        return res.status(200).json(user);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route for update a user
router.put('/:id', async (req,res)=>{
    try{
        if(!req.body.userId || !req.body.userName || !req.body.password || !req.body.email || !req.body.role || !req.body.created){
            return res.status(400).send({message: 'send all required fields',});
        }
       

        const {id} = req.params;
        const result = await User.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).json({message: 'User not found'});
        }
    
        return res.status(200).send({message:'User Update Successfully'});    
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// // Route for delete one user from database
// route.get('/user/:id', async (req,res)=>{
//     try{
//         const{id} = res.params;

//         const result = await User.findByIdAndDelete(id);
//         if(!result){
//             return res.status(400).json({message: 'user not found'});
//         }

//         return res.status(200).send({message: 'user delete succesfully'});
//     }catch(error){
//         console.log(error.message);
//         return res.status(500).send({message: error.message});
//     }
// });

export default router;