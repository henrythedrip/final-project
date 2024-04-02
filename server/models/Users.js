const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: STRING,
        required: true,
    },
    email: {
        type: STRING,
        required: true,
    },
    password: {
        type: STRING,
        required: true,
    },
})
const Question = model('Question', questionSchema)
module.exports = Question
