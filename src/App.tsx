import { useContext } from 'react';
import './App.css'
import { AuthContext } from './hooks/AuthProvider';
import TaskMapper from './components/TaskMapper.Component';
import Footer from './components/Footer.Component';
import Navbar from './components/Navbar.Component';


const App = () => {
  const user = useContext(AuthContext)
  return (
    <AuthContext.Provider value={user}>
      <Navbar/>
      <h1>Projeto de tasks fatec</h1>
      <TaskMapper/>
      <Footer/>
    </AuthContext.Provider>
  )
}

export default App
