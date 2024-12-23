import {mongoose} from "mongoose";

    const userSchema = mongoose.Schema(
        {
            userId:{
                type : Number,
                required : true,
            },
            userName:{
                type : String,
                required : true,
            },
            password:{
                type : String,
                required : true,
            },
            email:{
                type : String,
                required : true,
            },
            role:{
                type : String,
                required : true,
            },
            created:{
                type : String,
                required : true,
            }
        }
    )
        

export const User = mongoose.model('user', userSchema);


