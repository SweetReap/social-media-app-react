import { useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";

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
      <Typography variant="h1" gutterBottom>FakeBook!</Typography>
      <PostForm handleSubmit={onNewMessage}/>
      <PostFeed data={feed}/>
    </div>
  );
}

export default App;
