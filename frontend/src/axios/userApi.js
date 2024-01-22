import {backend, handleReturn} from "./configure.js"


export async function createAccount(username,email,password) {
  const data = {username,email,password}

  try {
    const respond = await backend.post('/user', data);
    
    if  (respond.data.error) {return handleReturn(false,respond.data.error)}
    else                     {return handleReturn(true)}
  } 
  
  catch(error) {return handleReturn(false,"Unable to connect to server right now")}
}

//---------------------------------------------------------------------------------------

export async function loginAccount(email,password) {
  const data = {email,password}

  try {
    const respond = await backend.get('/user', data);
    if  (respond.data.error) {return handleReturn(false,respond.data.error)}
    else                     {return handleReturn(true,respond.data)}
  } 
  
  catch(error) {return handleReturn(false,"Unable to connect to server right now")}
}