const mongoose = require("mongoose")
const questionSchema = mongoose.Schema({
    level: { type: String, required: true },
    type: { type: String, required: true },
    question: { type: String, required: true },
    options: [String],
    correctAnswer: String,
    codeSnippet: String,
})
const Question=mongoose.model("QuestionData",questionSchema);
module.exports={Question}