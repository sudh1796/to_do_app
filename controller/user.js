const {user}= require("../db/model")
const bcryptjs= require("bcryptjs")

const signup = async function(req,res){
    try{
        
        let {username,email,password}= req.body
        password = await bcryptjs.hash(password,8)
        // console.log({username,email,password});
        await user.create({username,email,password})
        res.status(201).send({
            status:"User Created"
        })
      
    }catch(e){
        console.log(e);
        res.status(500).send("Error")
    }
}

const login = async function(req,res){
    try{
    let {email,password}= req.body
    const User = await user.findOne({email})
    if(!User){
        throw new Error("No user found")
    }
    const is_match = await bcryptjs.compare(password,User.password)
    // console.log(is_match);
    if(!is_match){
        throw new Error("Incorrect password")
    }
    res.status(200).send({
        status:"user found",
        User
    })
    }catch(e){
        console.log(e);
        res.json({
            status:"failed"
        })
    }
}


module.exports={signup,login}