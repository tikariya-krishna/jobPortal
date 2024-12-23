import express from "express";
const mongodbURL  =  "mongodb+srv://dbuser:job-portal@cluster.i7mw1.mongodb.net/job_portal?retryWrites=true&w=majority&appName=Cluster";
import {mongoose} from "mongoose";
import { User } from "./models/user.js";


const app = express();


//Middleware for parsing request body
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("simple get");
});


// Route for save a new user
app.post('/user', async (req,res)=>{
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
app.get('/user', async (req,res)=>{
    try{
        const user = await User.find({});

        return res.status(200).json(user);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route for get one user from database
app.get('/user/:id', async (req,res)=>{
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

app.put('/user/:id', async (req,res)=>{
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

const port = 3000;
mongoose.connect(mongodbURL).then(()=>{
    console.log("Mongodb connected");
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    });
}).catch((error)=>{
    console.error(error);
});

