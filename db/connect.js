const mongoose= require("mongoose")

const connect = async function () {

        const mongo = mongoose.connect(process.env.DB)
        if(!mongo){
            console.log("database Error")
        }
        console.log("data base connected");
    
}
module.exports= connect