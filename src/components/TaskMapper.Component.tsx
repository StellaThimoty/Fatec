import { useEffect, useState } from "react"
import TaskT from "../types/task.type"
import TaskC from "./Task.Component"
// import { AuthContext } from "../hooks/AuthProvider"
import { Heading, Box } from "@chakra-ui/react"
import api from "../hooks/Axios"
import TaskForm from "./TaskForm.Component"

const TaskMapper = () => {
  // const user = useContext(AuthContext)
   const [tasks, setTasks] = useState<TaskT[]>([])

  const getdata = () => {
    const fetchData = async () => {
      const data = await api.get('/task')
      if (data.status === 200) {
        setTasks(data.data)
      }
    }
    fetchData()
  }
  
  useEffect(() => {
    getdata()
  }, [])

  const apagarTarefa = (id: number) => {
    api.delete(`/task/${id}`)
    .then(resposta => {
        if(resposta.status == 204) {
          getdata()
        } else {
            alert('Erro ao remover!')
        }
    })
    .catch(erro => {
        console.log(erro)
    })
}

function alterarStatus(tarefa: TaskT){
  tarefa.completed = !tarefa.completed
  api.put(`/task/${tarefa.id}`,tarefa)
  .then(() => {
      getdata()
  })
}

  return (
    <>
    <Box p={5} borderWidth='0px'>
      <Heading size='md'>Inserir nova task</Heading>
      <Box p={3}>
        <TaskForm getdata={getdata}/>
      </Box>
        {tasks.map((task) => (
      <TaskC key={task.id+task.title} id={task.id} title={task.title} completed={task.completed} alterarStatus={alterarStatus} apagarTarefa={apagarTarefa}></TaskC>
    ))}
    </Box>

    </>
  )
}

export default TaskMapper