const express = require("express");
const router = express.Router();
const { addQuestion, updateQuestion, deleteQuestion, getQuestionsByLevel} = require("../Controller/Questioncontroller");


router.get("/:level", getQuestionsByLevel);
router.delete("/delete/:id",deleteQuestion);
router.put("/update/:id",updateQuestion);
router.post("/add",addQuestion)


module.exports = router;
