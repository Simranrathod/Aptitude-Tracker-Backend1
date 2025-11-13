const express= require("express");
const cors=require("cors")
require("./Database/Connection")
const server= express();
server.use(express.json())
server.use(cors())

server.use("/aptitute",require("./Routes/Userroutes.js"))
server.listen(8089,()=>{
    console.log("server run at: http://localhost:8089");
})
