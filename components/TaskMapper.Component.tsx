import { useState } from "react"
import TaskT from "../types/task.type"
import TaskC from "./Task.Component"
// import { AuthContext } from "../hooks/AuthProvider"
import { Button, Stack, Input, Checkbox, Heading, Box } from "@chakra-ui/react"

const TaskMapper = () => {
  // const user = useContext(AuthContext)
   const [tasks, setTasks] = useState<TaskT[]>([{
    title: "Aiueo",
    completed: false
   },
   {
    title: "false",
    completed: true
   },
   {
    title: "idk",
    completed: false
   }
  ])

  // // const getdata = () => {
  //   const fetchData = async () => {
  //     const data = await fetch("https://render-deploy-fatec.onrender.com/task/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": user?.token.token as string
  //       }
  //     })
  //     const json:TaskT[] = await data.json()
  //     setTasks(json)
  //   }
  //   fetchData()
  // }
  
  return (
    <>
    <Box p={5} borderWidth='0px'>
      <Heading size='md'>Inserir nova task</Heading>
      <Box p={3}>
      <Stack spacing={3} direction='row' alignItems='center' justifyItems='center'>
        <Input variant='filled' placeholder="Digite o título da task"/> 
        <Checkbox>Realizada? </Checkbox>
        <Button colorScheme='blue'>Inserir </Button>
      </Stack>
      </Box>
        {/* <Button type="button" onSubmit={getdata}>Get data</Button> */}
        {tasks.map((task) => (
      <TaskC key={task.title} title={task.title} completed={task.completed}></TaskC>
    ))}
    </Box>

    </>
  )
}

export default TaskMapper