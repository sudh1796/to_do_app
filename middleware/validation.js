const {z}= require("zod")

const signin_validate = function(req,res,next){
    // validation
            const require_body= z.object({
                username:z.string(),
                email: z.string().email(),
                password:z.string().min(5)
            })
            const parsebody= require_body.safeParse(req.body)
            // console.log(parsebody);
            if(!parsebody.success){
               return res.json({
                    Error:parsebody.error.issues
                })
            } 
            next()
}


// login validation 
const login_validate = function(req,res,next){
    // validation
            const require_body= z.object({
                email: z.string().email(),
                password:z.string().min(5)
            })
            const parsebody= require_body.safeParse(req.body)
            // console.log(parsebody);
            if(!parsebody.success){
               return res.json({
                    Error:parsebody.error.issues
                })
            } 
            next()
}
module.exports= {signin_validate,login_validate}