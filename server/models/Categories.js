const { Schema, model } = require("mongoose")

const categorySchema = new Schema({
    // id: { type: Number,

    // },
    name: {
        type: String,
        required: true,
    },
    setOfQuestions: [{
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: Boolean,
            required: true,
        },
    }]
})
const Category = model('Category', categorySchema)
module.exports = Category

