import { createContext, useState } from "react";
import { retrieveDataFromLocalStorage } from '../util/cache'
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const userData = retrieveDataFromLocalStorage("UserAuth");
  const [auth,setAuth] = useState(userData);

  return (
    <AuthContext.Provider value = {{auth,setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;