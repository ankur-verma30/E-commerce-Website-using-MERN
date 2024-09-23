import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js";

//protected route token based
export const requireSignIn= async (res,req,next)=>{
    try{
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET_KEY);
        req.user=decode
        next();

        
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Internal Server Error",
            error,
        })
    }
};


//admin access
export const isAdmin = async (req, res, next) => {
    try {
       const user=await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
        });
    }
};

