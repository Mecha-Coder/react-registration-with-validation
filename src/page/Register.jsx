import React from 'react'
import Container from "../layout/Container"

function Register() {
  return (
    <Container >
      <h2>Register</h2>

      <div>
        <label htmlFor='email'>Email:</label>
        <input type="email" id="email"  required
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
        />
      </div>

      <div>
        <label htmlFor='password'>Password:</label>
        <input type="password" id="password" 
        required maxLength={32}/>
      </div>

      <div>
        <label htmlFor='password-confirm'>Confirm Password:</label>
        <input type="password" id="password-confirm" 
        required maxLength={32}/>
      </div>

      <button type="submit">Sign Up</button>

      <div>
        <p>Already registered?</p>
        <p>Sign In</p>
      </div>
     
    </Container>
  )
}

export default Register