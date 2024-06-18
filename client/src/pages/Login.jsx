import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../usercontext";


const Login = () => {
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')
const [redirect ,setRedirect] = useState(false);
const {setUserdata} = useContext(UserContext)

const handlelogin = async(e)=>{
e.preventDefault();
try {
  const user = await axios.post('http://localhost:3000/login',{email,password});
if(user){
  alert("successfully logged in"); 
setUserdata(user.data)
  setRedirect(true);
  // console.log(user)
}
} catch (error) {
  console.log(error)
  alert("Login failed")
}
}

if(redirect){
  return <Navigate to={"/"}></Navigate>
}

  return (
    <div className="formdiv mt-5 ">
      <form
        onSubmit={handlelogin}
        className="form flex flex-col gap-2 justify-center items-center bg-slate-200 min-h-[60vh] p-4"
      >
        <h2 className="text-center mb-2 mt-2 text-2xl underline">Login-Here</h2>

        <input onChange={(e)=>{
          setEmail(e.target.value)
        }}
          className="border-2 p-2 w-[50vw]"
          type="email"
          placeholder="example@gmail.com"
        ></input>
        <input onChange={(e)=>{
          setPassword(e.target.value)
        }}
          className="border-2 p-2 w-[50vw]"
          type="password"
          placeholder="enter password"
        />
        <button className="border-2 p-1 w-[50vw] bg-red-300 text-white" type="submit">
          Login
        </button>
        <h2>Dont have a account ?<span><Link to="/register">Create account</Link></span></h2>
      </form>
    </div>
  );
};

export default Login;
