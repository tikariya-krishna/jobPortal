import mongoose  from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AddJob",
        required:true,
    },
    education:{
        type: String,
        required: true,
    },
    specialization_course:{
        type: String,
        required: true,
    },
    headline:{
        type: String,
        required: true,
    },
});
export const JobApplication = mongoose.model('jobApplication', jobApplicationSchema);
