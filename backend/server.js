import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/userRouter.js'



const app = express()

app.use(cors())
app.use(bodyParser.json())

configDotenv()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL



mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Database is connected");
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
        })
    })
    .catch(error => console.log(error))


// app.post('/api/user/create-account', (req, res) => {
//     const user = req.body
//     res.status(200).json({messege: "Account created successfully", user: user})
// })


app.use('/user', userRouter)