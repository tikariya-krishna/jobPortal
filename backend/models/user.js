import {mongoose} from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

    const userSchema = mongoose.Schema(
        {
            fname:{
                type : String,
                required : true,
            },
            lname:{
                type : String,
                required : true,
            },
            password:{
                type : String,
                required : false,
            },
            email:{
                type : String,
                required : true,
            },
            role:{
                type : String,
                required : false,
            },


            // User update fields
            phone:{
                type : String,
                required : false,
            },
            address:{
                type : String,
                required : false,
            },
            gender:{
                type : String,
                required : false,
            },
            language:{
                type : String,
                required : false,
            },
            dob:{
                type : String,
                required : false,
            },
            linkedin:{
                type : String,
                required : false,
            },
            about:{
                type : String,
                required : false,
            },
            created:{
                type : String,
                required : false,
            },
            tokens: [{
                token: {
                    type: String,
                    required: true
                }
            }]
        }
    )
    
userSchema.methods.toJson = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
}

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET_KEY, {expiresIn : '8h'} );

    user.tokens = user.tokens.concat({token});

    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }
    return token;
}

export const User = mongoose.model('user', userSchema);


