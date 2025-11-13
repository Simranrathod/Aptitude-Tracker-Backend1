const mongoose=require("mongoose");
const Db="mongodb+srv://aptitute:1234@cluster0.jdk8idr.mongodb.net/aptitue?appName=Cluster0"
mongoose.connect(Db,{}).then(()=>console.log("✅ MongoDB connection start")).catch((error)=>{console.log(" DB Error:", error.message)})