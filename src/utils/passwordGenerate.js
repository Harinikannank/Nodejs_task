const generatePassword = (length) => {
    let charaters = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_+{}|:"
    let password = "";
    for (let index = 0; index < length; index++) {
        password += charaters.charAt(Math.floor(Math.random() * charaters.length))
    }
    return password
}

module.exports = generatePassword