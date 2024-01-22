import React from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function ShowPass({hide, value, onChange}) {
  return (
    <div className="show-pass" onClick={()=>{onChange(value=>!value)}} >
        {Boolean(!hide) || (value? <IoEyeOutline size={20}/> : <IoEyeOffOutline size={20}/>) }
      </div>
  )
}

export default ShowPass