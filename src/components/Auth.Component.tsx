import SinginC from './SignIn.Component';
import LoginC from './Login.Component';
import { useContext } from 'react';
import { AuthContext } from '../hooks/AuthProvider';
const Auth = () => {
  const user = useContext(AuthContext)

  return (
    <>
    {!user?.token.token && <LoginC></LoginC>}
    {!user && <SinginC></SinginC>}    
    </>
  )
}

export default Auth