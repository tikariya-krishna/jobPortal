import {mongoose} from "mongoose";

    const companySchema = mongoose.Schema(
        {
            id:{
                type : Number,
                required : true,
            },
            name:{
                type : String,
                required : true,
            },
            type:{
                type : String,
                required : true,
            },
            description:{
                type : String,
                required : true,
            },
            addres:{
                type : String,
                required : true,
            },
            status:{
                type : Boolean,
                required : true,
            }
        }
    )
        

export const Company = mongoose.model('company', companySchema);


