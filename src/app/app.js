import express  from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"
const app = express()
app.use(express.json())
 app.get ("/api",(req,res)=>{
    
    res.status(200).json({
        message:"hello"
    })
 })
app.post("/api/register",async(req,res)=>{

    const {email, name, password} = req.body
      // save to the data ....
//.....................................
const user = await userModel.create({
    email,name,password
})

//token generate
    const token = jwt.sign({
    id: user._id
},
"f63912e21774694f8c34172b1a0f9eeab7b74719c30ff5cc459cf8b2bfbd4740"
)
res.status(201).json({
    message:"yser create succesfully",
    user:{
        email,
        name,
        id : user._id
    },token
    
})
})
 app.get("/api/auth/me", async(req,res)=>{
  
    const authHeader = req.headers.authorization

    console.log(authHeader)
    

    const data = jwt.decode(authHeader)
    console.log(data)
    const user = await userModel.findById(data.id)

    console.log(user)
   
 })

export default app