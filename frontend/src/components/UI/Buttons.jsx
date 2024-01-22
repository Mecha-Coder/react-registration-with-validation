export function FormButton({onClick, disable, name}){
  return (
    <button disabled={disable} onClick={()=>{onClick()}}>{name}</button>
  );
}

