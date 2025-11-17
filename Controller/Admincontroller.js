const { JsonWebTokenError } = require("jsonwebtoken");
const {Adminuser}=require("../Models/Adminmodel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// <-------------------------------------------------->
const Adminsignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
     const hashpassword = await bcrypt.hash(password, 10)
    const userExist = await Adminuser.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already registered" });
     
    }
    
       const User = new Adminuser({ name, email, password: hashpassword,role:email==="admin1234@gmail.com"?"admin":"user" })
    await User.save();
    res.status(201).json({ message: "User Registered Successfully", User});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// <------------------------------------------------->
const Adminsignin = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const existingUser = await Adminuser.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
         const token = jwt.sign(
  { userid: existingUser._id, email: existingUser.email,role:existingUser.role },
  "our secret key",
  { expiresIn: "1d" }
);

    
    res.status(200).json({
      message: "Login successful",
      existingUser,loginmodel,token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




const verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, "our Secret key");
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = { Adminsignin,Adminsignup,verifyAdmin }

