

// <--------------------------------------------------------------------------->
const { Adminuser } = require("../Models/Adminmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()

// SIGNUP
const Adminsignup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ message: "you are not allowed to register as admin" })
        }

        const userexist = await Adminuser.findOne({ email });
        if (userexist) {
            return res.status(400).json({ message: "already register" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new Adminuser({ email, password: hashPassword, role: "admin" });

        await newUser.save();
        res.status(200).json({ message: "Admin Registered Successfully!", newUser });

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// SIGNIN
const Adminsignin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ message: "(Not Admin)" });
        }
        if (password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ message: "Incorrect Admin Password" });
        }

        const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, { expiresIn: "30d" })
        res.status(200).json({ message: "admin login successful", role: "admin", token })

    }
        
 catch (err) {
    res.status(500).json({ error: err.message });
}
};

module.exports = { Adminsignin, Adminsignup };


