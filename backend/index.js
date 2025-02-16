import express from "express";
//const mongodbURL  =  "mongodb+srv://dbuser:job-portal@cluster.i7mw1.mongodb.net/job_portal?retryWrites=true&w=majority&appName=Cluster";
import { PORT , MONGODBURL } from "./config.js";
import {mongoose} from "mongoose";
import { User } from "./models/user.js";
import userRoute from './routes/userRoute.js'
import { Company } from "./models/company.js";
import companyRoute from './routes/companyRoute.js'
import cors from "cors"
import addJobRoute from './routes/addJobRoute.js'

const app = express();

// Use CORS middleware with specified options
app.use(cors());

//Middleware for parsing request body
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("simple get");
});

app.use('/user', userRoute);
app.use('/company', companyRoute);
app.post('/contact', userRoute); // The contact route create in userRoute file.
app.use('/addjobs',addJobRoute);



mongoose.connect(MONGODBURL).then(()=>{
    console.log("Mongodb connected");
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    });
}).catch((error)=>{
    console.error(error);
});

