import axios from "axios"

const backend = axios.create({
  baseURL: 'http://localhost:4000', 
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

function handleReturn(status,errMsg = ""){
  // Params
  // status - Boolean
  // errMsg - String
  return {status, errMsg}
}

export {backend, handleReturn}


