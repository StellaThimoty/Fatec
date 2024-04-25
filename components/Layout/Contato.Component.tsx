import InputBox from "./InputBox.Component"
import Layout from "./Layout.Layout"
import { Heading, Box } from "@chakra-ui/react"
import { Form } from "react-router-dom"

const Contato = () => {
  return (
    <>
    <Layout>
    <Box p={5}>
    <Heading>Fatec Contato</Heading>
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
    </Box>
    </Layout>
    </>
  )
}

export default Contato