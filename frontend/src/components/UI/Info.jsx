import React from 'react'
import { FaInfoCircle } from "react-icons/fa";

function Info({list}) {
  return (
    <div className="info">
      <div className="top-right"><FaInfoCircle color="white"/></div>
      {list.map( (info,index) => <GenerateInfo key={index} info={info} /> )}
    </div>
  )
}

function GenerateInfo({info}){
  return(
    <span>&bull;&nbsp; {info}</span>
  );
}

export default Info