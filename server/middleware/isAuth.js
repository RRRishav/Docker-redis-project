import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user.js";
import mongoose from "mongoose";
import { Todo } from "../models/todo.js";
dotenv.config()

const isAuth = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
}
export default isAuth;