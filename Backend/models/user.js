const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = mongoose.Schema({
    name: String, 
    email: String,
    pass: String,
    userStatus: { type: Boolean, default: true },
    date: { type: Date, default: Date.now()},
});

userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        iat: moment().unix(),
    },
        process.env.SECRET_KEYWORD
    );
};

const user = mongoose.model('user', userSchema);
module.exports = user;