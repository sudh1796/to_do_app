const express = require("express")
const {signin_validate,login_validate }= require("../middleware/validation")
const {signup,login}= require("../controller/user")


const user_route= express.Router()


// create a account
user_route.post("/signup",signin_validate, signup)

// login into account
user_route.post("/login",login_validate,login)

module.exports= user_route