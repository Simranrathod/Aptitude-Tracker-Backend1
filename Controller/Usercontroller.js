const { User } = require("../Models/Usermodel");
// const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userexist = await User.findOne({ email });
        if (userexist) {
            return res.status(400).json({ message: "already register" })
        }

        const hassPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hassPassword })
        await newUser.save()

        res.status(200).json({
            message: "Signup successful",

        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

}

// <------------------------------------------------------------>
const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (!isMatch) {
            return res.status(404).json({ message: "password incorrect" });
        }


        const Token = jwt.sign({ userid: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: "30d" })
        // res.status(200).json({
        //     message: "Login successful",
        //     user: existingUser,
        //     token: Token
        // });
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
                createdAt: existingUser.createdAt || new Date(),
                totalTests: existingUser.totalTests || 0,

            },
            token: Token
        });

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const GetAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const GetUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { Signup, Signin, GetAllUsers, GetUserById }
