import {mongoose} from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET_KEY, {expiresIn : '1h'} );

    user.tokens = user.tokens.concat({token});

    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }
    return token;
}

export const User = mongoose.model('user', userSchema);


