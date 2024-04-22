import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {

 const [showTaskDone,setShowTaskDone] = useState(false)
 const navigate = useNavigate()

    useEffect(() => {
     const userData = async () => {
      const data = await  supabase.auth.getUser()
       if(!data.data.user.aud === "authenticated") {
        navigate("/login")
       }
     }
     userData()
    }, [navigate])

  return (
    <div>
    
   <button onClick={() => {
    supabase.auth.signOut()
   }}>
    Logout
   </button>

   <TaskForm/>

   <section>
    <p>Tasks pending</p>
    <button onClick={() => {
      setShowTaskDone(!showTaskDone)
      
    }}>
     Show Tasks Done
    </button>
   </section>

   <TaskList done={ showTaskDone }/>

    </div>
  )
}

export default Home