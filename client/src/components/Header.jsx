import { useContext ,useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../usercontext";
import axios from "axios";

const Header = () => {
const {userdata,setUserdata} = useContext(UserContext);

useEffect(() => {
  if (!userdata) {
    axios.get('/profile').then(({data}) => {
      setUserdata(data);
      
    });
  }
}, []);

// console.log(userdata._id)

const logout=async()=>{
  await axios.post('/logout')
  setUserdata(null);
}
  return (
    <div className="flex rounded-lg justify-between items-center bg-red-500 text-white p-4 mt-2">

      <div className="flex  items-center">
      <Link className="" to="/">My-Blog</Link>
      </div>
      <div className="flex gap-2 justify-center items-center">
      {!userdata && (
          <div>
           <Link to="/login">Login</Link>
          </div>
        )}
       
      {!!userdata && (
          <div>
           <Link to="/createpost">CreatePost</Link>
          </div>
        )}
       
       {/* <Link to="/logout">Logout</Link> */}
       {!!userdata && (
          <div>
            {userdata.email.split('@')[0]}
          </div>
        )}
       {!!userdata && (
          <div>
         <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
