import express from "express"
import {User} from "../model.js"
const router = express.Router();

function handleError(message){
return  
}

// Create new user
router.post("/", async (req,res)=>{
  const {username,email,password} = req.body

  try{
    if (username && email && password){
    const checkEmail    = await User.find({email},{email}) 
    const checkUsername = await User.find({username}, {username}) 
    } 
    
    else {res.status(500).send({})}
  }
  
  catch (error){
    res.status(500).send()
  }
})

export default router;