import { createContext, useState ,useEffect} from "react"
import axios from "axios";
export const UserContext = createContext({});

export const Usercontextprovider = ({children})=>{
    const [userdata , setUserdata] = useState(null);
    const [ready , setReady] = useState(false);

   
    return (
        <UserContext.Provider value={{userdata,setUserdata}}>
          {children}
        </UserContext.Provider>
      );
}
