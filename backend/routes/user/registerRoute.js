import "dotenv/config"
import express from "express"
import {User} from "../../model.js"
import {errorMsg} from "../../msgCatalog.js"
import toPascal from "../../utility/toPascal.js"
import bcrypt from "bcrypt"
const router = express.Router();
const saltRounds = Number(process.env.ROUND)


// Register
router.post("/", async (req,res)=>{
  const {email, password} = req.body
  let username = req.body.username

  try{
    //1) All required data is available
    if (username && email && password){ 
    
      //2)Standardize username to PascalCase
      username = toPascal(username) 

      //3) Check no matching username & email
      const checkEmail    = await User.find({email}).select("email")
      const checkUsername = await User.find({username}).select("username") 
      
      if     (checkEmail.length)   {res.send(errorMsg(401))} 
      else if(checkUsername.length){res.send(errorMsg(402))} 

      // 4) Convert password to hash
      else {
        bcrypt.hash(password, saltRounds, async (error, hash)=>{
          
          if (error){ res.send(errorMsg(407)) ; console.log(error) } 
          
          // 5) Create new entry with below information
          else{
            await User.create({username,email,password: hash})
            res.sendStatus(200)
          }
      })}
      

    } else{ res.send(errorMsg(400)) } 
  }
  catch (error){ res.send(errorMsg(500)) ; console.log(error)}
})

export default router;