const { Schema, model } = require("mongoose");


const scoreSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    score: {
        type: Number,
    },
});



module.exports = scoreSchema