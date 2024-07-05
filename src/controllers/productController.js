const product = require("../models/productModel")

const createProduct = async(req,res)=>{
    try {
        let userId = req.userId
        let data = {
            ...req.body,
            userId
        }
        const createproduct = await product.create(data)
        res.json({
            data: createproduct
        })
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
}

module.exports = {
    createProduct
}