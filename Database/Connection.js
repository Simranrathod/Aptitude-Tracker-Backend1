const mongoose=require("mongoose");
const Db= process.env.MONGO_URL
console.log(Db)
mongoose.connect(Db).then(()=>console.log("✅ MongoDB connection start")).catch((error)=>{console.log(" DB Error:", error.message)})