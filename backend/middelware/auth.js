import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async(req, res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        //console.log(decoded);

        const user = await User.findOne({_id:decoded._id,'tokens.token':token});

        //console.log(user);
        if(!user){
            throw new Error();
        }
        req.token = token;
        req.user = user;

        next();
    }catch(error){
        console.log(error);
        res.status(401).send({error: 'Please Authanticate'});
    }
}

export default auth;