import axios from "axios"

const backend = axios.create({
  baseURL: 'http://localhost:4000', 
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

function handleReturn(status,data = ""){
  // Params
  // status - Boolean
  // data - String, Object anything
  return {status, data}
}

export {backend, handleReturn}


