const mongoose = require("mongoose")
const {v4} = require("uuid")
const registerSchema = new mongoose.Schema({
    _id:{
        type: String,
        default: v4
    },
    userName: {
        type: String,
        require: true
    },
    emailId: {
        type: String,
        require: true
    },
    password: {
        type: String
    },
    mobileNumber: {
        type: Number,
        require: true
    },
    userId: {
        type: String,
        default: v4
    }

}, {timestamps:true})

const userRegistration = mongoose.model("userRegistration",registerSchema)

module.exports = userRegistration