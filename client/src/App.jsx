import { Routes,Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import axios from "axios"
import Register from "./pages/Register"
import Postpage from "./pages/Postpage"
import Createpost from "./pages/Createpost"
import { Usercontextprovider } from "./usercontext"
import EditPost from "./pages/EditPost"
const App = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:3000";
  return (
    <Usercontextprovider>
  <Routes>
    <Route path="/" element={<Layout/>}>
  <Route index element={<Homepage/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/createpost" element={<Createpost/>}/>
  <Route path="/post/:id" element={<Postpage/>}/>
  <Route path="/edit/:id" element={<EditPost />} />
  </Route>
  </Routes>
  </Usercontextprovider>
  )
}

export default App
