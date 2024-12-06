import UserModel from "../models/userModel.js"



export const CreateAccount = async (req, res) => {
    try {
        const userData = req.body
        const userModel = new UserModel(userData)

        const existance = await UserModel.findOne({ email: userModel.email })
        if (existance) {
            return res.status(400).json({ messege: "User is already exists" })
        }
        await userModel.save()
        res.json({ messege: "Account created successfully", userModel })
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
        else if (user.password === userData.password) {
            res.status(200).json({ messege: "Verfied User", user })
        }
        else {
            res.status(400).json({messege: "Invalid Password"})
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}