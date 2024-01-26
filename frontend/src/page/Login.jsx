import React, {useState, useContext} from 'react'
import LoginForm from '../components/login/LoginForm'
import Container from "../layout/Container"
import { loginAccount } from '../axios/userApi'
import { authContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [error, setError] = useState("")
  const { setAuth } = useContext(authContext)
  const navigate = useNavigate()

  async function loginUser(email,password){
    const result = await loginAccount(email,password)

    if(result.status) {
      setAuth(result.data)
      localStorage.setItem('authUserXXX', JSON.stringify(result.data));
      navigate("/main")
    }

    else{setError(result.data)}
  }


  return (
    <Container>
      <LoginForm login={loginUser} error={error}/>
    </Container>
  )
}

export default Login