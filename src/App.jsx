import { useState } from "react";
import "./App.css";

import Post from "./components/Post";
import PostForm from "./components/PostForm";
import PostFeed from "./components/PostFeed";

function App() {
  let [feed, setFeed] = useState([]);

  let onNewMessage = (data) => {
    //gets passed data from form
    //update state
    console.log(data)
    setFeed([...feed, data]);
  };
  return (
    <div className="box">
      <h1>Fakebook!</h1>
      <PostForm handleSubmit={onNewMessage}/>
      <PostFeed data={feed}/>
    </div>
  );
}

export default App;
