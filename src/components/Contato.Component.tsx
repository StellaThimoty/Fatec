import { Form } from "react-router-dom"
import InputBox from "./InputBox.Component"

const Contato = () => {
  return (
    <>
      <h1>Fatec Contato</h1>
      <Form>
      <div className='card'>
        <InputBox
        defaultValue="Nome"
        label="First Name"
        type="text"
        id="name"
        />
        </div>
        <div className='card'>
        <InputBox
        defaultValue="example@email.com"
        label="email"
        type="email"
        id="email"
        />
        </div>
        <div className='card'>
        <InputBox
        defaultValue="+55 199XXXX-XXXX"
        label="tel"
        type="tel"
        id="tel"
        />
        </div>
        <div className='card'><button>Submit</button></div>
      </Form>
    </>
  )
}

export default Contato