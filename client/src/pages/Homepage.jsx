import { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";


const Homepage = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/allpost').then((posts) => setPosts(posts.data))
  }, [])

  
  console.log(posts.length)

  return (
    <div>
      {posts.length > 0 && posts.map(e => (
        // here this posts with spread operator(...posts) means we have passed all the properties to it 
        <Post key={e._id} _id={e._id} title={e.title} content={e.content} cover={e.cover} summary={e.summary} createdAt={e.createdAt} author={e.author} />
      ))}

      
    </div>
  );
};

export default Homepage;
