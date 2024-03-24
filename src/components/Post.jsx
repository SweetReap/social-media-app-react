import Comment from "./Comment";
import { useState } from "react";

export default function Post(props) {
  const [likes,setLikes] = useState(0)
  function handleLike(){
    setLikes(likes+1)
  }
  return (
    <>
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments: </p>
      <Comment content="This is a test comment!" />
      <Comment content="This is another test comment!" />
      <Comment content="The Mitochondria is the Powerhouse of the Cell." />
    </>
  );
}
