import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try{
        const{fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        


         //finding user
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({fullName, email, password: hashedPassword})
        return res.status(201).json({message: "User created successfully"})
         

       
      
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


export const login = async (req, res) => {
    try{
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "All fields are required"})
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "User not found"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid password"})
        }

        return res.status(200).json({message: "Login successful", user})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}   
