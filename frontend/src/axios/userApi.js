import {backend, handleReturn} from "./configure.js"

async function hitBackend(endpoint, data){
  try {
    const respond = await backend.post(`/user/${endpoint}`, data);
    if  (respond.data.error) {return handleReturn(false,respond.data.error)}
    else                     {return handleReturn(true,respond.data)}
  } 
  
  catch(error) {return handleReturn(false,"Unable to connect to server right now")}
}

//---------------------------------------------------------------------------------------

export async function createAccount(username,email,password) {
  const data = {username,email,password}
  return await hitBackend("register",data)
}

export async function loginAccount(email,password) {
  const data = {email,password}
  return await hitBackend("login",data)
}

