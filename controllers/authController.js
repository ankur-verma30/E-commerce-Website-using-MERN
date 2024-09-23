import { hashPassword, comparePassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        //validation
        if (!name) return res.send({ error: 'Name is required' })
        if (!email) return res.send({ error: 'Email is required' })
        if (!password) return res.send({ error: 'Password is required' })
        if (!phone) return res.send({ error: 'Phone is required' })
        if (!address) return res.send({ error: 'Address is required' })

        //exisiting user
        const exisitingUser = await userModel.findOne({ email })
        //exisiting user
        if (exisitingUser) return res.status(200).send({
            success: true,
            message: 'Already Registered Please Login',

        })

        //register user
        const hashedPassword = await hashPassword(password)
        //save the password
        const user = await new userModel({ name, email, phone, password: hashedPassword }).save()
        res.status(200).send({
            success: true,
            message: 'User Registration Successfull',
            user,
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error
        })
    }

}
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validation
        if (!email || !password) return res.status(404).send({
            success: false,
            message: "Invalid email or password",
        })

        //check user
        const user = await userModel.findOne({ email })
        if (!user) return res.status(404).send({
            success: false,
            message: "User is not registered"
        })
        const match = await comparePassword(password, user.password)
        if (!match) return res.status(202).send({
            success: false,
            message: "Password Invalid"
        })

        //create token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d',
        })

        res.status(200).send({
            success: true,
            message: 'Login Successfull',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token
        })
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        });
    }
}

export const testController = (req, res) => {
    try {
        res.send("Protected Routes")
    }
    catch (error) {
        console.log(error)
        res.send({ error });
    }
}
