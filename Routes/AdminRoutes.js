const express = require("express");
const router = express.Router();
const verifyAdmin=require("../Middleware/Verifyadmin")
const {Adminsignin, Adminsignup} = require("../Controller/Admincontroller");
const { GetAllUsers } = require("../Controller/Usercontroller");
const{allscore}=require("../Controller/Scorecontroller")
router.get("/dashboard", verifyAdmin, (req, res) => {
    res.json({ message: "Welcome Admin Dashboard" });
});
router.post("/adminsignup", Adminsignup);
router.post("/adminsignin", Adminsignin);
router.get("/all-users",verifyAdmin,GetAllUsers)
router.get("/all-scores",verifyAdmin,allscore)

module.exports = router;
