import express from "express";
const mongodbURL  =  "mongodb+srv://dbuser:job-portal@cluster.i7mw1.mongodb.net/job_portal?retryWrites=true&w=majority&appName=Cluster";
import {mongoose} from "mongoose";
import { User } from "./models/user.js";
import userRoute from './routes/userRoute.js'
import { Company } from "./models/company.js";
import companyRoute from './routes/companyRoute.js'


const app = express();


//Middleware for parsing request body
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("simple get");
});

app.use('/user', userRoute);
app.use('/company', companyRoute);


const port = 3000;
mongoose.connect(mongodbURL).then(()=>{
    console.log("Mongodb connected");
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    });
}).catch((error)=>{
    console.error(error);
});

