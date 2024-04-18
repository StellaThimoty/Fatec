import { FormEvent, useContext, useState } from 'react';
import SinginT from '../types/singin.type';
import { AuthContext } from '../hooks/AuthProvider';

const SinginC = () => {
  const [input, setInput] = useState<SinginT>({
    name: "",
    email: "",
    password: "",
  })
  const auth = useContext(AuthContext)
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    if (input.email !== "" && input.password !== "") {
      auth?.singinAction(input)
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
    <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
      <div className=''>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="singname" onChange={handleInput} />
        </div>
        <div className=''>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="singemail" onChange={handleInput} />
        </div>
        <div className=''>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="singpassword" onChange={handleInput} />
        </div>
        <div className='card'>
          <button disabled={input === undefined ? true : false} type='submit'>Submit</button>
          </div>
    </form>
</>
  )
}

export default SinginC