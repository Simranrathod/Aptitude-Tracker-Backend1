const express = require("express");
const router = express.Router();
const {Scoreboard,allscore,myscore}=require("../Controller/Scorecontroller");
router.post("/submit-score",Scoreboard)
// router.get("/all-scores", async (req, res) => {
//   const scores = await Scoreboard.find().populate("userId", "name email");
//   res.json(scores);
// });
router.get("/all-scores",allscore)
router.get("/my-scores/:userId",myscore)
// router.put("/increase-tests/:userId",increaseTestCount)

module.exports=router;
