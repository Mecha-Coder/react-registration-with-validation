import express from "express"
import {User} from "../model.js"
import {errorMsg} from "../msgCatalog.js"
import toPascal from "../utility/toPascal.js"
const router = express.Router();


// Register
router.post("/", async (req,res)=>{
  const {email, password} = req.body
  let username = req.body.username

  try{
    if (username && email && password){ //All required data is available
      username = toPascal(username) //Standardize username to PascalCase

      const checkEmail    = await User.find({email}).select("email")
      const checkUsername = await User.find({username}).select("username") 
  
      if     (checkEmail.length)   {res.send(errorMsg(401))} // Check if no email exist
      else if(checkUsername.length){res.send(errorMsg(402))} // Check if no username exist

      else {
        await User.create(req.body)
        res.sendStatus(200)
      }
    } 
    
  else         { res.send(errorMsg(400)) } }
  catch (error){ res.send(errorMsg(500)) ; console.log(error)}
})

//Login
router.get("/", async (req,res)=>{
  const {email, password} = req.body

  try{
    if (email && password){ //All required data is available
      
      const user = await User.find({email}) 
      
      if     (!user.length)   {res.send(errorMsg(403))} // Check if  email exist
      else if(user.length>1)  {res.send(errorMsg(405))} // If there is more than 1 account with same email
      
      else if(user[0].password !== password){res.send(errorMsg(406))} //Invalid password
      
      else {res.send({
        userId  : user[0]._id,
        username: user[0].username
      })} //Authentication successful
    } 
    
  else         { res.send(errorMsg(400)) } }
  catch (error){ res.send(errorMsg(500)) ; console.log(error)}
})

export default router;