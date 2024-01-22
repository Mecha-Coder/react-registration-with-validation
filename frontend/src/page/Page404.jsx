import React from 'react'
import Container from "../layout/Container"
import { Link } from "react-router-dom" 

function Page404() {
  return (
    <Container>
      <h1>🫢 Oops!</h1>
      <h2>Page not found...</h2>
      <p>Redirect to <Link className="font-white" to={"/"}>login</Link> page</p>
    </Container>
  )
}

export default Page404