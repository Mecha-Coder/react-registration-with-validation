import React, {useState, useEffect} from 'react'
import {Email, Password} from "./LoginInput"
import { FormButton } from '../UI/Buttons'
import { Link } from "react-router-dom"
import Error from "../UI/Error"

function LoginForm({login,error}) {
  const [email,setEmail] = useState("")
  const [psw, setPsw] =  useState("")

  // Show and hide error side effect
  const [showError, setShowError] = useState("")
  useEffect(()=>{setShowError(error)},[error]) 
  useEffect(()=>{setShowError("")},[email,psw])

  function handleSubmit(){login(email,psw)}

  return (
    <>
      <h2>Login</h2>
      {showError && <Error msg={showError}/>}
      <Email      value={email} onChange={setEmail}/>
      <Password   value={psw}   onChange={setPsw}/>
      <FormButton disable={!email || !psw}
                  name="Sign in" onClick={handleSubmit}/>

      <div>
        <p>Don't have an account?</p>
        <Link className="font-white" to={"/register"}>Create account</Link>
      </div>
    </>
  )
}

export default LoginForm