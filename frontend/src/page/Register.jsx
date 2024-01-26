import React, {useState} from 'react'
import RegisterForm from "../components/register/RegisterForm"
import RegisterSuccess from "../components/register/RegisterSuccess"
import Container from "../layout/Container"
import {createAccount} from "../axios/userApi"

function Register() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function registerUser(username,email,password){
    
    const result = await createAccount(username,email,password)
    
    if(result.status) {setSuccess(true)}
    else              {setError(result.data)}

  }

  return (
    <Container>
      {success? <RegisterSuccess /> : <RegisterForm register={registerUser} error={error}/>}
    </Container>
  )
}

export default Register




