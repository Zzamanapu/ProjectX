import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("users", schema)


export default UserModel;