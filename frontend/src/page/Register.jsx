import React, {useState, useEffect} from 'react'
import Container from "../layout/Container"
import { USER_REGEX, EMAIL_REGEX, PSW_REGEX} from "../asset/formValidation/regex"
import { Username,  Email, Password, ConfirmPassword } from "../components/Inputs"
import {FormButton} from  "../components/Buttons"

function Register() {
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

  useEffect(()=>{isValidUser(USER_REGEX.test(user))},[user])
  useEffect(()=>{isValidEmail(EMAIL_REGEX.test(email))},[email])
  useEffect(()=>{
    const isValid = PSW_REGEX.test(psw)
    isValidPsw(isValid)
    isvalidConPsw(Boolean(isValid && (psw===conPsw)))

  },[psw,conPsw])

  function submitForm(){
    if(validUser && validEmail && validPsw && validConPsw){
      alert("submit info")
    } 
    else {alert("invalid entry found. I apologize for the inconvenience, but we can't submit your form")}

    setUser(""); setEmail(""); setPsw(""); setConPsw("") 
  }

  return (
    <Container >
      <h2>Register</h2>

      <Username        value={user}   onChange={setUser}   valid={validUser}/>
      <Email           value={email}  onChange={setEmail}  valid={validEmail}/>
      <Password        value={psw}    onChange={setPsw}    valid={validPsw} />
      <ConfirmPassword value={conPsw} onChange={setConPsw} valid={validConPsw} disable={!validPsw}/>
      <FormButton      disable={!validUser || !validEmail || !validPsw || !validConPsw} onClick={submitForm}/>        

      <div>
        <p>Already registered?</p>
        <p>Sign In</p>
      </div>

    </Container>
  )
}

export default Register




