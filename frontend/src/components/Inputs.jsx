
import { useState, useEffect, useRef} from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import {userValidInfo, emailValidInfo, pswValidInfo, conPswValidInfo} from "../asset/formValidation/info"
import Info from "../layout/Info"

function InputTemplate({props,length,name,type,list, initFocus = false}){
  const {value, onChange, valid, disable} = props
  const id = name.replace(" ","_")

  const [focus, setFocus] = useState(false)
  const inputRef = useRef()

  useEffect(()=>{ if(initFocus){ inputRef.current.focus() }},[initFocus])

  return(
    <>
      <div>
        <label htmlFor={id}>{name}:&nbsp;
          {!valid && value && <FaTimes size={25} color="red"/>}
          { valid &&          <FaCheck size={25} color="lightgreen"/>}
        </label>

        <input required autoComplete='off'
          maxLength={length} 
          type={type} 
          id={id}
          value={value} 
          onChange={e=>{onChange(e.target.value)}}
          onFocus={()=>{setFocus(true)}} 
          onBlur={()=>{setFocus(false)}}
          disabled={disable}
          ref={inputRef}
        />
      </div>

      {focus && !valid && value && (
      <Info>
        {list.map( (info,index) => <GenerateInfo key={index} info={info} /> )}
      </Info> )}
    </>
  );
}

function GenerateInfo({info}){
  return(
    <span>&bull;&nbsp; {info}</span>
  );
}

export function Username(props){
  return <InputTemplate name="Username" 
                        props={props} type="text"   
                        length={12}   list={userValidInfo} 
                        initFocus={true}
                        />
}

export function Email(props){
  return <InputTemplate name="Email" 
                        props={props} type="text" 
                        length={24}   list={emailValidInfo} 
                        />
}

export function Password(props){
  return <InputTemplate name="Password" 
                        props={props} type="password" 
                        length={24}   list={pswValidInfo}
                        />
}

export function ConfirmPassword(props){
  return <InputTemplate name="Confirm Password" 
                        props={props} type="password" 
                        length={24}   list={conPswValidInfo}
                        />
}

