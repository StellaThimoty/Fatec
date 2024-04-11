import './App.css'
import InpuxBox from './components/InputBox'

function App() {

  return (
    <>
      <h1>Fatec aula</h1>
      <form>
        
        <div className='card'>
        <InpuxBox
        defaultValue="Nome"
        label="First Name"
        type="text"
        id="name"
        />
        </div>
        <div className='card'>
        <InpuxBox
        defaultValue="example@email.com"
        label="email"
        type="email"
        id="email"
        />
        </div>
        <div className='card'>
        <InpuxBox
        defaultValue="+55 199XXXX-XXXX"
        label="tel"
        type="tel"
        id="tel"
        />
        </div>
        <div className='card'><button>Submit</button></div>
      </form>
    </>
  )
}

export default App
