export function FormButton({onClick, disable}){
  return (
    <button disabled={disable} onClick={()=>{onClick()}}>Sign Up</button>
  );
}

