const express = require("express");
const router = express.Router();
const {Scoreboard,myscore,increaseTestCount}=require("../Controller/Scorecontroller");
router.post("/submit-score",Scoreboard)

// router.get("/all-scores",allscore)
router.get("/my-scores/:userId",myscore)
router.put("/increase-tests/:userId",increaseTestCount)

module.exports=router;
