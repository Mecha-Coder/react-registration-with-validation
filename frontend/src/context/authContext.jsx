import { createContext, useState } from "react";

export const authContext = createContext()
  
function AuthProvider({children}){
  const isLogin = JSON.parse(localStorage.getItem('authUserXXX'));
  const [auth, setAuth] = useState(isLogin)

  return (
    <authContext.Provider value={{auth, setAuth}}>
      {children}
    </authContext.Provider>    
  )
}

export default AuthProvider