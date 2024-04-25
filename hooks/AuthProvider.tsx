import { createContext, useState } from "react"
import Token from "../types/token.type"
import LoginT from "../types/login.type"
import SinginT from "../types/singin.type"

type Signinreturn = {
  id: number,
  name: string,
  email: string,
}

type AuthType = {
  token: Token,
  loginAction: (data:LoginT) => Promise<Token>,
  singinAction: (data:SinginT) => Promise<Signinreturn>,
  logOut: () => void,
}

export const AuthContext = createContext<AuthType | undefined>(undefined)

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [token, setToken] = useState<Token>({
    token: localStorage.getItem("site") || "",
    refreshToken: "",
    expiresAt: new Date()
  })
  const logOut = () => {
    setToken({
      token: "",
      refreshToken: "",
      expiresAt: new Date()
    })
    localStorage.removeItem("site")
  }
  const loginAction = async (data:LoginT):Promise<Token> => {
      const response:Response = await fetch("https://render-deploy-fatec.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      const res:Token = await response.json()
      if (res) {
        setToken(res)
        localStorage.setItem("site", res.token)
        return res
      }

      return res
  }
  const singinAction = async (data:SinginT):Promise<Signinreturn> => {
    const response:Response = await fetch("https://render-deploy-fatec.onrender.com/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    
    const res:Signinreturn = await response.json()
    if (res) {
      return res
    }

    return res
}
  
  return <AuthContext.Provider value={{token, loginAction, singinAction, logOut}}>{children}</AuthContext.Provider>
}