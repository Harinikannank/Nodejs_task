const express = require("express")
const productcontroller = require("../controllers/productController")
const { verifyJwt } = require("../middlewares/authTokens")
const router = express.Router()

router
.route("/createproduct")
.post(verifyJwt, productcontroller.createProduct)


module.exports = router