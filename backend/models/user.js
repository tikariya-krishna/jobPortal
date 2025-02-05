import {mongoose} from "mongoose";

    const userSchema = mongoose.Schema(
        {
            name:{
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
            phone:{
                type : String,
                required : false,
            },
            role:{
                type : String,
                required : true,
            },
            created:{
                type : String,
                required : false,
            }
        }
    )
        

export const User = mongoose.model('user', userSchema);


