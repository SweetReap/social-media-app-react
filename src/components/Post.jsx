import Comment from "./Comment";
// import CommentSection from "./CommentSection";
import { useState } from "react";

function ReplyForm(props) {
  const [reply, setReply] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onNewReply(reply);
        setReply("")
      }}
    >
      <label htmlFor="comment">Reply: </label>
      <textarea
        placeholder="Reply Here..."
        name="comment"
        id="comment"
        cols="30"
        rows="2"
        onChange={(e) => {
          setReply(e.target.value);
        }}
        value={reply}
        required
      ></textarea>
      <button type="submit">Comment</button>
    </form>
  );
}

function CommentSection(props) {
  let renderList = () => {
    return props.data.map((data, idx) => {
      return (
        <div className="box reply">
          <div className="replyPic profilePic"></div>
          <Comment content={data} key={idx}/>
          <div className="like">Likes: A lot</div>
          <div className="like">Reposts: 100</div>
          <div className="like">Replies: 100</div>
        </div>
      );
    });
  };

  return (
    <div className="box">
      <h4>Replies</h4>
      {renderList()}
    </div>
  );
}

export default function Post(props) {
  const [likes, setLikes] = useState(0);
  let [replies, setReplies] = useState([]);
  function handleLike() {
    setLikes(likes + 1);
  }

  let handleReply = (reply) => {
    setReplies([...replies, reply]);
    console.log(replies);
  };

  return (
    <div className="box">
      <div className="postBox">
        <div className="profilePic"></div>
        <div className="postDetails">
          <div className="author">You</div>
          <div className="followers">Followers: 0</div>
          <div className="post">
            <h3>{props.content}</h3>
          </div>
        </div>
        <img src={props.image} alt="post's image" />
      </div>
      <div className="actions">
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>Like</button>
      </div>

      <ReplyForm onNewReply={handleReply} />
      <CommentSection data={replies} />
      {/* <Comment content="The Mitochondria is the Powerhouse of the Cell." /> */}
    </div>
  );
}
