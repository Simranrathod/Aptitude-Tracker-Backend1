const express= require("express");
require("dotenv").config();

const cors=require("cors")
require("./Database/Connection")
const server= express();
server.use(express.json())
server.use(cors())

server.use("/User",require("./Routes/Userroutes.js"))
server.use("/questions",require("./Routes/Questionroutes.js"))
server.use("/admin",require("./Routes/AdminRoutes.js"))
server.use("/score",require("./Routes/Scorerouter.js"))
const PORT = process.env.PORT || 8089;
server.listen(PORT,()=>{
    console.log("server run at: http://localhost:8089");
})
