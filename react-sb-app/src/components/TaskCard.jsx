import { useTasks } from "../context/TaskContext";

function TaskCard({task}) {

  const {deleteTask,updateTask} = useTasks()

    const handleDelete = () => {
     deleteTask(task.id)
    }

    const handleDone = () => {
      updateTask(task.id,{done: !task.done})
    }

  return (
    <div>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    <div>
        <button onClick={() => handleDelete()}>
            Delete
        </button>
        <button onClick={() => handleDone()}>
            Done
        </button>
    </div>
  </div>
  )
}

export default TaskCard