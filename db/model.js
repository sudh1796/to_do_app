const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const to_do_schema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    details:String,
    time: { type: Date, default: Date.now },
    status:{
        type:String,
        default:"to-do"
    }
})



const user = mongoose.model("user",userschema)
const to_do = mongoose.model("to_do",to_do_schema)

module.exports={
    user,
    to_do
}