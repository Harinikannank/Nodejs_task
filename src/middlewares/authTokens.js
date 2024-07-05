const jwt = require("jsonwebtoken")
const register = require("../models/authModel")

const generateToken = async (userId) => {
    let token = await jwt.sign({ id: userId }, "qwertyuiop0987654321asdfghjk", { expiresIn: "1h" })
    return token
}

const verifyJwt = async (req, res, next) => {
    let token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: "user must logged in"
        })
    }
    const withoutBearer = token.split(" ")[1]
    try {
        let payload = jwt.verify(withoutBearer, "qwertyuiop0987654321asdfghjk")
        if (!payload) {
            return res.status(404).json({
                message: "this is not Token "
            })
        }
        let finduser = await register.findOne({userId: payload.id})
        if (!finduser) {
            return res.status(404).json({
                message: "invalid user"
            })
        }
        req.userId = finduser.userId
        next()
    } catch (error) {
        res.json({
            Error: "Invalid Token"
        })
    }    
}

module.exports = {
    generateToken,
    verifyJwt
}