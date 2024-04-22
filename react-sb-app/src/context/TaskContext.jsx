import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const TaskContext = createContext()

export const useTasks = () => {
   const context = useContext(TaskContext)
   if(!context)  throw new Error("useTasks must be used within a TaskCOntextProvider")
   return context
}

export const TaskContextProvider = ({children}) => {

   const [tasks,setTasks] = useState([])
   const [adding,setAdding] = useState(false)
   const [loading,setLoading] = useState(false)

     const getTasks = async  (done = false) => {
      setLoading(true)
       const userId = await supabase.auth.getUser()
      const {error,data} = await supabase.from('tasks').select().eq("userId", userId.data.user.id).eq("done", done)
      if (error) throw error;
      setTasks(data)
      setLoading(false)
      console.log(tasks)
     }

     const createTask = async (title,description) => {
      setAdding(true)
      try {
        const userData = await  supabase.auth.getUser()
        const res = await  supabase.from('tasks').insert({
            title: title,
            description: description,
            userId: userData.data.user.id
            
         })
         
         const {error,data} = await supabase.from('tasks').select().eq("userId", userData.data.user.id)
       
         if (error) throw error;

         setTasks([...data])
         
        
      } catch (error) {
        console.log(error)
      } finally {
        setAdding(false)
      }

     }

     const deleteTask = async (id) => {
      const user = await supabase.auth.getUser()

     await supabase.from('tasks').delete().eq("userId", user.data.user.id).eq("id",id)
     
    const {error,data} = await supabase.from('tasks').select().eq("userId", user.data.user.id)
  
    if (error) throw error;

    setTasks(tasks.filter((task) => task.id !== id))
    }

    const updateTask = async (id, taskFields) => {
      const user = await supabase.auth.getUser()
      
      await supabase.from('tasks').update(taskFields).eq("userId", user.data.user.id).eq("id",id)

      const {error,data} = await supabase.from('tasks').select().eq("userId", user.data.user.id)
      if(error) throw error;

      setTasks(tasks.filter((task) => task.id !== id))
    }
    return <TaskContext.Provider value={{
      tasks,
      adding,
      loading,
      getTasks,
      createTask,
      deleteTask,
      updateTask
    }}>
            {children}
    </TaskContext.Provider>
}
