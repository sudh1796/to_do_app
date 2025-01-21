const express = require("express")
const user_route= require("../routes/user_routes")


// database 
const connect = require("../db/connect")
connect()

const app = express()

app.use(express.json())
app.use(user_route)

const port = process.env.PORT



app.listen(port,()=>{
    console.log(`port is listening @ ${port}`);
})