const express= require("express")
// const { Adminsignin,Adminsignup,verifyAdmin }=require("../Controller/Admincontroller")
const router= express.Router();
const {Signup,Signin,GetUserById}= require("../Controller/Usercontroller");

router.post("/signup",Signup)
router.post("/signin",Signin)
// router.get("/all-users",GetAllUsers)
router.get("/user/:id", GetUserById);

module.exports=router