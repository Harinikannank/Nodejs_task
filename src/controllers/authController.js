const userRegister = require("../models/authModel")
const generatePwd = require("../utils/passwordGenerate")
const emailService = require("../utils/email")
const bcrypt = require("bcrypt")
const { generateToken } = require("../middlewares/authTokens")
const registration = async (req, res) => {
    try {
        const { emailId, ...restbody } = req.body
        const existingEmail = await userRegister.findOne({ emailId })
        if (existingEmail) {
            return res.status(409).json({
                message: "Email already exist"
            })
        }
        let password = await generatePwd(8)
        let hashpassword = await bcrypt.hash(password, 10)
        const data = {
            ...restbody,
            emailId,
            password: hashpassword
        }

        const createUser = await userRegister.create(data)
        await emailService(emailId, data.userName, password)
        res.json({
            data: createUser,
            message: "success"
        })

    } catch (error) {
        res.json({
            Error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const {
            emailId,
            password
        } = req.body
        const checkEmailid = await userRegister.findOne({emailId})
        if (!checkEmailid) {
            return res.status(404).json({
                   message: "This email is not register" 
            })
        }
        const checkPassword = await bcrypt.compare(password, checkEmailid.password)
        if (!checkPassword) {
            return res.status(404).json({
                message: "Incorrect password"
            })
        }
        let token = await generateToken(checkEmailid.userId)
        let data = {
            checkEmailid,
            token
        }
        res.json({
            data: data,
            message: "login success"
        })
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
}

module.exports = {
    registration,
    login
}