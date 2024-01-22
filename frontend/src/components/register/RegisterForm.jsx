import React, {useState, useEffect} from 'react'
import { USER_REGEX, EMAIL_REGEX, PSW_REGEX} from "../../asset/formValidation/regex"
import { Link } from 'react-router-dom'

import { Username,  Email, Password, ConfirmPassword } from "./RegisterInput"
import {FormButton} from  "../UI/Buttons"
import Error from '../UI/Error'

function RegisterForm({register, error}) {
  // Monitor value change
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")
  const [conPsw, setConPsw] = useState("")
  
  // Check if input meet validation requirement
  const [validUser, isValidUser] = useState(false)
  const [validEmail, isValidEmail] = useState(false)
  const [validPsw, isValidPsw] = useState(false)
  const [validConPsw, isvalidConPsw] = useState(false)

  // Show and hide error side effect
  const [showError, setShowError] = useState("")
  useEffect(()=>{setShowError(error)},[error]) 
  useEffect(()=>{setShowError("")},[user,email,psw,conPsw])

  // Validate of input meet requirement
  useEffect(()=>{isValidUser(USER_REGEX.test(user))},[user])
  useEffect(()=>{isValidEmail(EMAIL_REGEX.test(email))},[email])
  useEffect(()=>{
    const isValid = PSW_REGEX.test(psw)
    isValidPsw(isValid)
    isvalidConPsw(Boolean(isValid && (psw===conPsw)))
  },[psw,conPsw])
  
  
  return (
    <>
      <h2>Register</h2>
      {showError && <Error msg={showError}/>}
      <Username        value={user}   onChange={setUser}   valid={validUser}/>
      <Email           value={email}  onChange={setEmail}  valid={validEmail}/>
      <Password        value={psw}    onChange={setPsw}    valid={validPsw} />
      <ConfirmPassword value={conPsw} onChange={setConPsw} valid={validConPsw} disable={!validPsw}/>
      <FormButton      disable={!validUser || !validEmail || !validPsw || !validConPsw} 
                      onClick={handleSubmit} name="Create Account"/>        

      <div>
        <p>Already registered?</p>
        <Link className="font-white" to={"/"}>Login</Link>
      </div>
    </>
  )

    function handleSubmit(){register(user,email,psw) }
}

export default RegisterForm