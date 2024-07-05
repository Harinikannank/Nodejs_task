const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    mobilename: {
        type: String
    },
    mobilemodel: {
        type: String
    },
    mobilecost: {
        type: String
    },
    mobilestorage: {
        type: String
    },
    userId: {
        type: String
    }
})

const product = mongoose.model("products", productSchema)
module.exports = product