const express = require("express")
const connect = require("./config/connection")
const router = require("./routes/userRoute")
const authRouter = require("./routes/authRoutes")
const productRouter = require("./routes/productsRoutes")
const app = express()
require("dotenv").config()
app.use(express.json())

connect()
app.use(router)
app.use("/auth",authRouter)
app.use("/product",productRouter)


app.use("/", (req, res) => {
    res.send("we get it")
})

const port = 5000
app.listen(port, () => {
    console.log("Server is running on", port);
})

