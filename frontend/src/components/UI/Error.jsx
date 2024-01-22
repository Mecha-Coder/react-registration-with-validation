import React from 'react'
import { MdErrorOutline } from "react-icons/md";

function Error({msg}) {
  return (
    <div className="error-box"><MdErrorOutline color="red"/> {msg}</div>
  )
}

export default Error