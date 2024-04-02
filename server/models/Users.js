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
const User = model('User', userSchema)
module.exports = User
