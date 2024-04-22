import User from "../models/User.js";

export const checkDuplicateEmailOrUsername = async (req,res,next) => {

    const user = await User.findOne({username: req.body.username})

    if (user) return res.status(400).json({message: "User already exists"})

    const email = await User.findOne({email: req.body.email})

    if (email) return res.status(400).json({message: "Email already exists"})

    next()

}