const mongoose = require("mongoose")
const userModel = mongoose.Schema({
    name:String,
    email:String,
    password:String,
     createdAt: {
    type: Date,
    default: Date.now
  },

  totalTests: {
    type: Number,
    default: 0
  }
},
 { timestamps: true } )
const User = mongoose.model("UserData",userModel)
module.exports={User}