import { useRef, useState } from "react"
import Editor from "../components/Editor"
import axios from "axios"


const Createpost = () => {
    const [title , setTitle] = useState('')
    const [summary , setSummary] = useState('')
    const [content , setContent] = useState('')
    const [file , setFile] = useState('')
    const[redirect,setRedirect] = useState(false)
    const fileref = useRef();

    const createPost = async(ev)=>{
    ev.preventDefault();
    const data = new FormData();
    data.set("title",title);
    data.set("summary",summary);
    data.set("content",content);
    data.set("file",file[0]);
 
    await axios.post('/createpost',data);
    }

    const upload =(e)=>{
        e.preventDefault();
        fileref.current.click();
    }
  return ( 
    <div>
      <form className="flex flex-col gap-3 justify-center " onSubmit={createPost}>
        <input className='rounded-md border-2 mt-2 p-2' type='text' placeholder='title' value={title} onChange={ev=>setTitle(ev.target.value)}/>
        <input className='rounded-md border-2 p-2' type='text' placeholder='summary' value={summary} onChange={ev=>setSummary(ev.target.value)}/>
        <input ref={fileref} className='border-2 hidden' type='file' placeholder='summary' onChange={ev=>setFile(ev.target.files)}/>
        <button  className=" transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300          border-2  p-2 text-white rounded-full" onClick={upload}>upload</button>
       <Editor value={content} setContent={setContent}/>
       <button  className="p-2  bg-red-500 rounded-full text-white w-full" type="submit">Post</button>
      </form>
    </div>
  )
}

export default Createpost
