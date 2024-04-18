import Task from "../types/task.type"

const TaskC = ({title, completed}:Task) => {
  return (
    <>
      <label htmlFor="checkbox">{title}</label>
      <div className="task">
        <input type="checkbox" name="checkbox" id="checkbox" defaultChecked={completed} />
        <h2>Completed</h2>
      </div>
    </>
  )
}

export default TaskC