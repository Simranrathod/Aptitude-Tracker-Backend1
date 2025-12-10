const Score = require("../Models/Score");
const {User}=require("../Models/Usermodel")
const Scoreboard = async (req, res) => {
  try {
    const { userId,name, score, level, total } = req.body;

    const newscore = new Score({
      userId,
      name,
      score,
      level,
      total
    });

    await newscore.save();

    res.status(200).json({ message: "Score submitted to admin!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const allscore = async (req, res) => {
  const scores = await Score.find()
  res.status(200).json(scores);
};

const myscore=async(req,res)=>{
  try{
const {userId}=req.params;
const scores1=await Score.find({userId}).sort({ date: -1 });
res.status(200).json(scores1);
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
}


// const increaseTestCount = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $inc: { totalTests: 1 } },
//       { new: true }
//     );

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
module.exports = { Scoreboard, allscore,myscore};
