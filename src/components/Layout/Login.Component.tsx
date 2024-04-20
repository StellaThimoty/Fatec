import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../hooks/AuthProvider';
import LoginT from '../../types/login.type';
import Layout from './Layout.Layout';
import { Form } from "react-router-dom"

const LoginC = () => {
  const [input, setInput] = useState<LoginT>({
    email: "",
    password: "",
  })
  const auth = useContext(AuthContext)
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    if (input.email !== "" && input.password !== "") {
      auth?.loginAction(input)
      return
    }
  }
  const handleInput = (e:FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }
  return(
    <>
    <Layout>
    <h1>Logar</h1>
      <Form onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="logemail" onChange={handleInput} />
        </div>
        <div className=''>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="logpassword" onChange={handleInput} />
        </div>
        <div className=''>
          <button disabled={input === undefined ? true : false} type='submit'>Submit</button>
          </div>
    </Form>
    </Layout>
</>
  )
}

export default LoginC