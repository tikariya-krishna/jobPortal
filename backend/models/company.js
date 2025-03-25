import {mongoose} from "mongoose";

    const companySchema = mongoose.Schema(
        {
            user_id:{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'User',
                required : true,
            },
            cname:{
                type : String,
                required : true,
            },
            tagline:{
                type : String,
                required : false,
            },
            category:{
                type : String,
                required : false,
            },
            owner_name:{
                type : String,
                required : false,
            },
            // logo:{
            //     type : String,
            //     required : false,
            // },
            established:{
                type : String,
                required : false,
            },
            email:{
                type : String,
                required : false,
            },
            phone_number:{
                type : String,
                required : false,
            },
            ladline:{
                type : String,
                required : false,
            },
            address:{
                type : String,
                required : false,
            },
            city:{
                type : String,
                required : false,
            },
            state:{
                type : String,
                required : false,
            },
            country:{
                type : String,
                required : false,
            },
            zip:{
                type : String,
                required : false,
            },
            employees:{
                type : String,
                required : false,
            },
            working:{
                type : String,
                required : false,
            }, 
            summrey:{
                type : String,
                required : false,
            }
        }
    )
        

export const Company = mongoose.model('company', companySchema);


