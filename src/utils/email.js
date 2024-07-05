const { text } = require("express");
const nodemailer = require("nodemailer")
const sendemailtoUser = async(emailId,name,password)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "prakashpotter5972@gmail.com",
            pass: "oldn kngv vwrj sgrs",
        },
    });
    const mailOption = {
        from: "prakashpotter5972@gmail.com",
        to: emailId,
        subject: "Your Generate password",
        text: `Hi ${name}, this is your password ${password}`
    }
    await transporter.sendMail(mailOption)
    console.log("email send successfully");
}

module.exports = sendemailtoUser


