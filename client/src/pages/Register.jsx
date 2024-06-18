import { Link } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'

const Register = () => {

const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

const handleuser = async(e)=>{
e.preventDefault();
const user = await axios.post('http://localhost:3000/register', {email , password})
console.log("data send successfully")
console.log(user)
}


  return (
    <div className="formdiv mt-5 ">
    <form onSubmit={handleuser}
      className="form flex flex-col gap-2 justify-center items-center bg-slate-200 min-h-[60vh] p-4"
    >
      <h2 className="text-center mb-2 mt-2 text-2xl underline">Register-Here</h2>

      <input
      onChange={e=>{
setEmail(e.target.value)
      }}
        className="border-2 p-2 w-[50vw]"
        type="email"
        placeholder="example@gmail.com"
      ></input>
      <input 
       onChange={e=>{
        setPassword(e.target.value)
              }}
        className="border-2 p-2 w-[50vw]"
        type="password"
        placeholder="enter password"
      />
      <button  className="border-2 p-1 w-[50vw] bg-red-300 text-white" type="submit">
        Register
      </button>
      <h2>Already have a account ?<span><Link to="/login"> Signin</Link></span></h2>
    </form>
  </div>
  )
}

export default Register
