import { useState } from "react";
import { useTasks } from "../context/TaskContext";


function TaskForm() {

  const {createTask,adding} = useTasks()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
     createTask(title,description)
     setTitle("")
     setDescription("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write your task title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
          value={title}
        />
        <input
          type="text"
          name="description"
          placeholder="Write your task description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />

        <button>
            {
              adding ? 'adding...' : "Add"
            }
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
