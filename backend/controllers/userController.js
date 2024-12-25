import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv"

configDotenv()

const SaltRounds = parseInt(process.env.SaltRounds);
const TokenSecret = process.env.TokenSecret;

export const CreateAccount = async (req, res) => {
    try {
        const { name, email, password } = req.body
        bcrypt.hash(password, SaltRounds, async function (err, hash) {
            if (err) {
                res.status(500).json({ error: "Internal Server Error - Hash" })
            }
            const userModel = new UserModel({ name, email, password: hash })
            const existance = await UserModel.findOne({ email: userModel.email })
            if (existance) {
                return res.status(400).json({ messege: "User is already exists" })
            }
            await userModel.save()
            res.json({ messege: "Account created successfully", userModel })
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}


export const LoginHandle = async (req, res) => {
    try {
        const userData = req.body

        const user = await UserModel.findOne({ email: userData.email })
        if (!user) {
            return res.status(400).json({ messege: "user does not exists" })
        }
        if (bcrypt.compare(userData.password, user.password)) {
            let token = jwt.sign({_id: user._id, name: user.name, email: user.email}, TokenSecret);
            console.log(token)
            res.status(200).json({ messege: "Verfied User", userToken: token })
        }
        else {
            res.status(400).json({ messege: "Invalid Password" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

