import express from "express"
import {User} from "../../model.js"
import {errorMsg} from "../../msgCatalog.js"
import bcrypt from "bcrypt"
const router = express.Router();

//Login
router.post("/", async (req,res)=>{
  const {email, password} = req.body

  try{
    //1) All required data is available?
    if (email && password){ 
      
      // 2) Check if email exist
      const user = await User.find({email}) 
      if     (!user.length)   {res.send(errorMsg(403))} 
      else if(user.length>1)  {res.send(errorMsg(405))} // SAFETY: If there is more than 1 account with same email
      
      // 3) Compare password with hash
      else{
        bcrypt.compare(password, user[0].password, (error,result)=>{

          if (error){ res.send(errorMsg(408)) ; console.log(error) }

          // 4) Return user data
          else if(result){ //Authentication successful
            res.send({
              userId  : user[0]._id,
              username: user[0].username
            })
          }  else {res.send(errorMsg(406))} //Invalid password
      })}

    } else{ res.send(errorMsg(400)) } 
  }
  catch (error){ res.send(errorMsg(500)) ; console.log(error)}
})

export default router;