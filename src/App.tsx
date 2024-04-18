import { useContext } from 'react';
import './App.css'
import { AuthContext } from './hooks/AuthProvider';
import TaskMapper from './components/TaskMapper.Component';


const App = () => {
  const user = useContext(AuthContext)
  return (
    <AuthContext.Provider value={user}>
      <h1>Projeto de tasks fatec</h1>
      <TaskMapper/>
    </AuthContext.Provider>
  )
}

export default App
