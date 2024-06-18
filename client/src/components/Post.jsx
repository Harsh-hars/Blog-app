import { formatISO9075 } from "date-fns";
import {Link} from 'react-router-dom'
const Post = ({_id, title, content, summary, cover, createdAt, author }) => {
  console.log(author);
  return (
    <div className="mt-3">
    <Link to={`/post/${_id}`}>
    <div className="flex gap-5 border-2 max-w-[100%] shadow-2xl">
          <img className="h-[35vh] w-[25vw] object-fill" 
            src={"http://localhost:3000/" + cover}
          />
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="font-bold text-2xl">{title}</h2>
          <h2 className="font-bold text-2xl">{author.email}</h2>
            <time>{formatISO9075(new Date(createdAt))}</time>
          <p>{summary} </p>
        </div>
      </div>
    </Link>



    </div>
  );
};

export default Post;
