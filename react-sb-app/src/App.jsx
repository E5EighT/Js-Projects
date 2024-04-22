import { Routes ,Route, useNavigate} from "react-router-dom";
import Login from './pages/Login'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { supabase } from "./supabase/client";
import { TaskContextProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {

 const navigate =  useNavigate()

useEffect(() => {
   supabase.auth.onAuthStateChange((event,session) => {
     if(!session) {
       navigate('/login')
     } else {
      navigate('/')
     }
   })
},[])


  return (
    
    <TaskContextProvider>
      <Navbar/>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="*" element={<NotFound/>} />
      </Routes>
    </TaskContextProvider>
    
   
  )
}

export default App