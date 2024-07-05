const mongoose = require("mongoose")
const connect = ()=>{
    mongoose.connect("mongodb+srv://prakashpotter5972:G2WFxrbpuVUPqCkY@prakashshelby.deehx7i.mongodb.net/?retryWrites=true&w=majority&appName=prakashshelby")
    .then(() => {
        console.log("mongodb connect");
    })
    .catch((err) => {
        console.log("connection error", err.message);
    })
}
module.exports = connect