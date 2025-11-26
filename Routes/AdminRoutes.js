const express = require("express");
const router = express.Router();

const {Adminsignin, Adminsignup} = require("../Controller/Admincontroller");

router.post("/adminsignup", Adminsignup);
router.post("/adminsignin", Adminsignin);

module.exports = router;
