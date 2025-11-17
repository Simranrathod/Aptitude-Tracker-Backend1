const express= require("express")
const { Adminsignin,Adminsignup,verifyAdmin }=require("../Controller/Admincontroller")
const router= express.Router();
const {Signup,Signin}= require("../Controller/Usercontroller");

router.post("/signup",Signup)
router.post("/signin",Signin)

router.post("adminsignin",Adminsignin)
router.post("adminsignup",Adminsignup)
router.get("verify-admin",verifyAdmin)

module.exports=router