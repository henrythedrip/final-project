const { Schema, model } = require("mongoose");


const scoreSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    questionCount: {
        type: Number,
    },
    correct:{
        type: Number
    }
});



module.exports = scoreSchema