import { useState } from "react";

export default function PostForm(props) {
  const [post, setPost] = useState("");
  const [img, setImage] = useState();

  function handleImgChange(e) {
    //check if img is actually an accepted file...
    
    //set img to uploaded file
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="box postForm">
      <h2>Create A Post!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevent page reloading
          props.handleSubmit({post: post, image: img})
          setPost("")
          setImage("")
        }}
      >
        <textarea
          name="post"
          id="post"
          cols="50"
          rows="5"
          required
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="image">| Image Upload</label>
        <input
          type="file"
          name="image"
          id="image"
          accept=".png,.jpeg,.jpg,.gif"
          content={img}
          onChange={handleImgChange}
        />{" "}
        <br />
        <button className="post-submit">Post!</button>
      </form>
    </div>
  );
}
