import { useState } from "react";
import Post from "./components/Post";
import "./App.css";

function App() {
  return (
    <>
      <h1>Fakebook!</h1>
      {/* {CreatePostForm} */}
      {/* {Feed} */}
      <Post content="This is a test post!" />
      <Post content="Yes."/>
    </>
  );
}

export default App;
