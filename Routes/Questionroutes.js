const express = require("express");
const verifyAdmin=require("../Middleware/Verifyadmin")
const router = express.Router();
const { addQuestion, updateQuestion, deleteQuestion, getQuestionsByLevel,alldata} = require("../Controller/Questioncontroller");


router.get("/all", alldata);   
router.get("/:level", getQuestionsByLevel);
router.delete("/delete/:id",verifyAdmin, deleteQuestion);
router.put("/update/:id",verifyAdmin, updateQuestion);
router.post("/add", verifyAdmin,addQuestion);


module.exports = router;
