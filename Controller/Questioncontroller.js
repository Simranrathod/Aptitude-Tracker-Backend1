const { Question } = require("../Models/Questionmodel")

// Admin: Add new question
const addQuestion = async (req, res) => {
  try {
    const newQ = new Question(req.body);
    await newQ.save();
    res.status(201).json({ message: "Question added successfully", question: newQ });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Admin: Update question
const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQ = await Question.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedQ) return res.status(404).json({ message: "Question not found" });
    res.status(200).json({ message: "Question updated", question: updatedQ });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Delete question
const deleteQuestion = async (req, res) => {
    try{
        const {id}=req.params;
        const deleted=await Question.findByIdAndDelete(id)
        if(!deleted)
        {
            return res.status(404).json({message:"question not found"})
        }
        res.status(200).json({message:"Question delete succesfully"})
    }
    catch(err){
        res.status(500).json({err:err.message})

    }


}

const getQuestionsByLevel = async (req, res) => {
  const { level } = req.params;

  try {
    let questions = [];

    if (level === "easy") {
      questions = await Question.find({ level: "easy", type: "mcq" }).limit(20);
    } 
    else if (level === "medium") {
      const mcqs = await Question.find({ level: "medium", type: "mcq" }).limit(20);
      const coding = await Question.find({ level: "medium", type: "code" }).limit(10);
      questions = [...mcqs, ...coding];
    } 

  else if (level === "hard") {
  const coding = await Question.find({ level: "hard", type: "code" }).limit(30);
  questions = coding;
}

    else {
      return res.status(400).json({ message: "Invalid level" });
    }

    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const alldata=async(req,res)=>{
  try{
     const allquestion=await  Question.find();
       res.status(200).json(allquestion);
  }
  catch(err){
     res.status(500).json({ error: err.message });
  }
}

module.exports = { addQuestion, updateQuestion, deleteQuestion, getQuestionsByLevel,alldata };