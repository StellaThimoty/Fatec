import './App.css'
import Login from './components/Login';
import AuthProvider from './hooks/AuthProvider';

const App = () => {
  return (
    <>
    <AuthProvider>
      <h1>Fatec aula</h1>
      <Login></Login>
    </AuthProvider>
    </>
  )
}

export default App
