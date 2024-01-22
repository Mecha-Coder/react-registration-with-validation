
import { useState, useEffect, useRef} from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import {userValidInfo, emailValidInfo, pswValidInfo, conPswValidInfo} from "../../asset/formValidation/info"
import Info from "../UI/Info"
import ShowPass from "../UI/ShowPass"

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

      {focus && !valid && value && <Info list={list} />}
    </>
  );
}



export function Username(props){
  return (
    <section>
      <InputTemplate name="Username" 
        props={props} 
        type="text"   
        length={12}    
        initFocus={true}
        list={userValidInfo}
      />
    </section>
  ); 
}

export function Email(props){
  return (
    <section>
      <InputTemplate name="Email" 
        props={props} 
        type="text" 
        length={24}   
        list={emailValidInfo} 
      />
    </section>
  );
}

export function Password(props){
  const [toggle, setToggle] = useState(false)
  
  return (
    <section>
      <ShowPass hide={props.value} value={toggle} onChange={setToggle} />

      <InputTemplate name="Password" 
        props={props} 
        type={toggle? "text": "password"} 
        length={24}  
        list={pswValidInfo}
      />
    </section>
  ); 
}

export function ConfirmPassword(props){
  const [toggle, setToggle] = useState(false)
  
  return (
    <section>
      <ShowPass hide={props.value} value={toggle} onChange={setToggle} />

      <InputTemplate name="Confirm Password" 
        props={props} 
        type={toggle? "text": "password"}
        length={24}   
        list={conPswValidInfo}
      />
    </section>
  );
}