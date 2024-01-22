
import { useEffect, useRef,  useState} from "react";
import ShowPass from "../UI/ShowPass";


function InputTemplate({props,length,name,type, initFocus = false}){
  const {value, onChange, disable} = props
  const id = name.replace(" ","_")

  const inputRef = useRef()

  useEffect(()=>{ if(initFocus){ inputRef.current.focus() }},[initFocus])

  return(
    <>
      <div>
        <label htmlFor={id}>{name}:</label>

        <input required autoComplete='off'
          maxLength={length} 
          type={type} 
          id={id}
          value={value} 
          onChange={e=>{onChange(e.target.value)}}
          ref={inputRef}
          disabled={disable}
        />
      </div>
    </>
  );
}

export function Email(props){
  return (
    <section>
      <InputTemplate name="Email" 
        type="text" 
        length={24}
        props={props}
        initFocus={true}   
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
        type={toggle? "text":"password"} 
        length={24} 
        props={props}  
      />
    </section>
  );
}