import { Router } from "express";
import { CreateAccount, LoginHandle } from "../controllers/userController.js";


const userRouter = Router()


userRouter.post('/create-account', CreateAccount)

userRouter.post('/login', LoginHandle)

export default userRouter