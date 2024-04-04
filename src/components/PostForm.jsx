import { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";

export default function PostForm(props) {
  const [post, setPost] = useState("");
  const [img, setImage] = useState();

  function handleImgChange(e) {
    //check if img is actually an accepted file...

    //set img to uploaded file
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const postCard = (
    <form
      onSubmit={(e) => {
        e.preventDefault(); //prevent page reloading
        props.handleSubmit({ post: post, image: img });
        setPost("");
        setImage("");
      }}
      className="box"
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
      <Button variant="contained" type="submit">
        Post!
      </Button>
    </form>
  );

  return (
    <Box sx={{ minWidth: 350 }}>
      {postCard}
    </Box>
  );
}
