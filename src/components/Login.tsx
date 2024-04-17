import { FormEvent, useState } from 'react';
import LoginT from '../types/login.type';
import { useAuth } from '../hooks/AuthProvider';

const Login = () => {
  const [input, setInput] = useState<LoginT>({
    email: "",
    password: "",
  })

  const auth = useAuth()
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
      <form onSubmit={handleSubmit}>
        <div className='card'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleInput} />
        </div>
        <div className='card'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleInput} />
        </div>
        <div className='card'>
          <button disabled={input === undefined ? true : false} type='submit'>Submit</button>
          </div>
    </form>
</>
  )
}

export default Login