import express from "express";
import bcrypt from "bcryptjs";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"; 
import {User} from '../models/user.js';
import { Contact } from "../models/contect.js";
import auth from "../middelware/auth.js";

dotenv.config();

const router = express.Router();

router.get('/me', auth, async (req,res)=>{
    
    res.send(req.user);
})

router.post("/register", async (req, res) => {
    try {
        const { fname, lname, email, password, role } = req.body;

        if (!fname || !lname || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fname,
            lname,
            email,
            password: hashedPassword, // ✅ Store the hashed password
            role
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});




router.post("/login", async (req, res) => {

    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email, role });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials (User not found)" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials (Wrong password)" });
        }

        const token = await user.generateAuthToken();

        // Debugging: Log if user is found
        console.log("User found:", user);

        // res.status(200).json({ message: "Login successful", user });
        res.status(200).json({ 
            message: "Login successful", 
            user: user,
            token: token
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

  

  // ✅ Logout Route (Destroy Session)
router.post("/logout", auth, async (req, res) => {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token;
    });

    await req.user.save();
    // localStorage.clear();
    res.send({ message: "Logout successful" });
});   




// Route for get one user from database
router.get('/:id', auth, async (req,res)=>{
    
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
router.put('/update/:id', async (req,res)=>{
    try{
        if(!req.body.fname || !req.body.lname || !req.body.email || !req.body.phone || !req.body.address || !req.body.gender || !req.body.language || !req.body.dob || !req.body.linkedin || !req.body.about || !req.body.created){
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

router.post('/contact', async (req,res)=>{
    
    try{
        if(!req.body.name || !req.body.email || !req.body.subject || !req.body.message){  
           return res.status(400).send({message: 'Send all required fields',});
        }
        
        const newContactReq = {
            name: req.body.name,
            email : req.body.email,
            subject: req.body.subject,
            message: req.body.message
        };
        const contact = await Contact.create(newContactReq);
        return res.status(201).send(contact);
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message});  
    }
});


export default router;