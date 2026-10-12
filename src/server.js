import app from "./app/app.js"
import {connectDb} from "./config/db.js"

await connectDb()
 app.listen(3000,()=>{
    console.log("server  is running")
 })