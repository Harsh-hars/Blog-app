import axios from 'axios';
import { formatISO9075 } from "date-fns";
import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../usercontext';
import { FaRegTrashAlt } from "react-icons/fa";
import postmodel from '../../../server/Model/Postmodel';
const Postpage = () => {

  const [postInfo, setPostInfo] = useState(null);
  const { userdata } = useContext(UserContext);
  const { id } = useParams();

const handledelete = async()=>{
await axios.delete(`/delete/${id}`);
}



  useEffect(() => {
    fetch(`http://localhost:3000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  console.log(postInfo)



  if (!postInfo) return '';


  return (
    <div>

      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-4xl mt-6 text-center font-bold'>{postInfo.title.toUpperCase()}</h2>
        <div className='w-[65%] mt-9'><h1 className='text-3xl'>{postInfo.summary}</h1></div>
        <div className='flex gap-5 mt-5 justify-center items-center'>
          <h1 className=' text-2xl'>By -<span className='font-bold underline'> {postInfo.author.email}</span></h1>
          {userdata && userdata._id === postInfo.author._id && (
            <div className='flex gap-2 justify-center items-center'>
              <Link to={`/edit/${id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </Link>
              {/* delete button */}
              <Link>
                <FaRegTrashAlt onClick={handledelete}/>
              </Link>
            </div>

          )}
        </div>
        <h1>At - <time>{formatISO9075(new Date(postInfo.createdAt))}</time></h1>  </div>
      <img src={`http://localhost:3000/${postInfo.cover}`} alt="" />




      {/* inorder to print the html content without tag we need to use it  */}
      <div className="content text-3xl mt-5" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  )
}

export default Postpage