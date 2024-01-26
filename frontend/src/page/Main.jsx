import React, {useContext} from 'react'
import { authContext } from "../context/authContext"
import Container from "../layout/Container"
import { useNavigate } from "react-router-dom"

function Main() {
  const {auth, setAuth} = useContext(authContext)
  const navigate = useNavigate()

  function handleClick(){
    setAuth("")
    localStorage.removeItem('authUserXXX');
    navigate("/")
  }

  return (
    <Container>
      <h1>Main page</h1>
      <h2>Hi 👋🏻 {auth?.username}</h2>
      <h3>Your user ID is {auth?.userId}</h3>
      <p className="button" onClick={handleClick}>Sign out</p>
    </Container>
  )
}

export default Main