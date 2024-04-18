import { useContext, useState } from "react"
import TaskT from "../types/task.type"
import TaskC from "./Task.Component"
import { AuthContext } from "../hooks/AuthProvider"


const TaskMapper = () => {
  const user = useContext(AuthContext)
  const [tasks, setTasks] = useState<TaskT[]>([{
    title: "",
    completed: false
  }])
  const getdata = () => {
    const fetchData = async () => {
      const data = await fetch("https://render-deploy-fatec.onrender.com/task/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": user?.token.token as string
        }
      })
      const json:TaskT[] = await data.json()
      setTasks(json)
    }
    fetchData()
  }
  return (
    <>
        <button type="button" onSubmit={getdata}>Get data</button>
        {tasks.map((task) => (
      <TaskC key={task.title} title={task.title} completed={task.completed}></TaskC>
    ))}

    </>
  )
}

export default TaskMapper