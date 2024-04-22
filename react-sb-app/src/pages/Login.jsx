import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

function Login() {

    const navigate =  useNavigate()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
      e.preventDefault()
    try {
      const result =  await  supabase.auth.signUp({
            email,
            password
    
          })
          console.log(result)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
      const userData = async () => {
        const data = await  supabase.auth.getUser()
        console.log(data)
        if(data.data.user?.aud === "authenticated") {
          navigate("/")
        }
      }
      userData()
  },[navigate])

   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@test.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
          <input
          type="password"
          name="password"
          placeholder="******"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
