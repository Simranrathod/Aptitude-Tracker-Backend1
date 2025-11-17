const mongoose = require("mongoose")
const AdminModel = mongoose.Schema({
    email: String,
  password: String,
    }
)
const Adminuser = mongoose.model("AdminModel",AdminModel)
module.exports={Adminuser}