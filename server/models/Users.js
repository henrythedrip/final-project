const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

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
});

userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema)

module.exports = User
