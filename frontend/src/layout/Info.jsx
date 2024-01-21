import React from 'react'
import { FaInfoCircle } from "react-icons/fa";

function Info({children}) {
  return (
    <div className="info">
      <div className="top-right"><FaInfoCircle color="white"/></div>
      {children}
    </div>
  )
}

export default Info