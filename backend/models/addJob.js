
import mongoose from "mongoose";

const addjobSchema = new mongoose.Schema(
    {
        job_title : {
            type: String,
            required : true
        },
        company_name : {
            type: String,
            required : true
        },
        category : {
            type: String,
            required : true
        },
        discription :{
            type: String,
            required: true
        },
        salary_range :{
            type: String,
            required: true
        },
        vacancy:{
            type: String,
            required: true
        },
        experiance :{
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        job_type:{
            type: String,
            required: true
            
        },
        email:{
            type: String,
            required: true
            
        },
        phone_number:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
            
        },
        city:{
            type: String,
            required: true
            
        },
        state:{
            type: String,
            required: true
            
        },
        country:{
            type: String,
            required: true
            
        },
        zip_code:{
           type: String,
           required:  true
        },
    },
);

export const AddJob = mongoose.model('addJob', addjobSchema);

