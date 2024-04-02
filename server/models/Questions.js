const { Schema, model } = require("mongoose")

const questionSchema = new Schema({
    questionBody: {
        type: String,
        required: true,
    },
    answer: {
        type: Boolean,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
})
const Question = model('Question', questionSchema)
module.exports = Question
