import React, { useEffect } from 'react'
import { useRef , useState} from 'react';
import Editor from '../components/Editor';
import {useParams , Navigate} from 'react-router-dom';
import axios from 'axios'
import postmodel from '../../../server/Model/Postmodel';
const EditPost = () => {

const {id} = useParams();
const fileref = useRef();
const [title , setTitle] = useState('')
const [summary , setSummary] = useState('')
const [content , setContent] = useState('')
const [file , setFile] = useState('')
const[redirect,setRedirect] = useState(false)

useEffect(()=>{
axios.get(`/post/${id}`).then((res)=>{
console.log(res.data);
setTitle(res.data.title);
setContent(res.data.content);
setSummary(res.data.summary)
setFile(res.data.cover)
})
},[id])
console.log(id);

const updatepost = async(e) =>{
    e.preventDefault();
    const data = new FormData();
    data.set('title' , title);
    data.set('content', content);
    data.set('summary', summary);
    data.set('id' , id);
    {file?.[0 && (
      data.set('file' , file?.[0])
    )]}
   await axios.put('/post',data);
   setRedirect(true);
   console.log("formm data is "+data);
}

if(redirect){
 return <Navigate to={`/post/${id}`}/>
}
console.log(file)
const handlefileupload = (e)=>{
    e.preventDefault();
    fileref.current.click()
}

  return (
    <div>
        <form className="flex flex-col gap-3 justify-center " onSubmit={updatepost}>
        <input className='rounded-md border-2 mt-2 p-2' type='text' placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <input className='rounded-md border-2 p-2' type='text' placeholder='summary'value={summary} onChange={(e)=>{setSummary(e.target.value)}} />
        <input ref={fileref} className='border-2 hidden' type='file' placeholder='summary' onChange={(e)=>{setFile(e.target.files)}} />
        <button  className=" transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 border-2 p-2 text-white rounded-full" onClick={handlefileupload}>upload</button>
       <Editor value={content} setContent={setContent}/>
       <button  className="p-2  bg-red-500 rounded-full text-white w-full" type="submit">Update-Post</button>
      </form>
    </div>
  )
}

export default EditPost