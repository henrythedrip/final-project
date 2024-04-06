const { Schema, model } = require("mongoose")

const questionSchema = new Schema({
    question: {
        type: String,
    },
    answer: {
        type: Boolean,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
})
const Question = model('Question', questionSchema)
module.exports = Question
