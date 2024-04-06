const { Schema, model } = require("mongoose")

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    setOfQuestions: [{
        type:Schema.Types.ObjectId,
        ref:"Question",
    }]
})
const Category = model('Category', categorySchema)
module.exports = Category

