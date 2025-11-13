const mongoose = require("mongoose")
const userModel = mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User = mongoose.model("UserData",userModel)
module.exports={User}