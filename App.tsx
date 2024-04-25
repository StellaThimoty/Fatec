// import { useContext } from 'react';
import './App.css'
// import { AuthContext } from './hooks/AuthProvider';
import TaskMapper from './components/TaskMapper.Component';
import Layout from './components/Layout/Layout.Layout'
import { Heading, Divider, Box } from '@chakra-ui/react';


const App = () => {
  // const user = useContext(AuthContext)
  return (
    // <AuthContext.Provider value={user}>
    <>
      <Layout>
        <Box p={4}>
        <Heading>Projeto de tasks fatec</Heading>
        <Divider/>
        <TaskMapper/>
        </Box>
      </Layout>

    </>
    // </AuthContext.Provider>
  )
}

export default App
