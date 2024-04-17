import { useContext, createContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
import Token from "../types/token.type"
import Login from "../types/login.type"

type AuthType = {
  tokenstr: string,
  loginAction: (data:Login) => Promise<Token>,
  logOut: () => void,
}

const AuthContext = createContext<AuthType | null>(null)

const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [tokenstr, setTokenstr] = useState<string>(localStorage.getItem("site") || "")
  // const navigate = useNavigate()
  const logOut = () => {
    setTokenstr("")
    localStorage.removeItem("site")
    // navigate("/login")
  }
  const loginAction = async (data:Login):Promise<Token> => {
      const response:Response = await fetch("https://render-deploy-fatec.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      const res:Token = await response.json()
      if (res) {
        setTokenstr(res.token)
        localStorage.setItem("site", res.token)
        // navigate("/")
        return res
      }

      return res
  }
  
  return <AuthContext.Provider value={{tokenstr, loginAction, logOut}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider