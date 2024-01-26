import React from 'react'
import { Link } from "react-router-dom"

function RegisterSuccess() {
  return (
    <>
      <h2>New account successfully created 👍🏼</h2>
      <p><Link className="font-white" to={"/"}>Login</Link> to continue</p>
    </>
  )
}

export default RegisterSuccess