import React, {useState} from 'react'
import {Email, Password} from "./LoginInput"
import { FormButton } from '../UI/Buttons'
import { Link } from "react-router-dom"

function LoginForm({login}) {
  const [email,setEmail] = useState("")
  const [psw, setPsw] =  useState("")

  function handleSubmit(){login(email,psw)}

  return (
    <>
      <h2>Login</h2>
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