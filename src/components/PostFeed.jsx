import Post from "./Post"
export default function PostFeed(props){

  let renderPosts = () =>{
    return props.data.map((data, idx) =>{
      return(
        <Post content={data.post} image={data.image} key={idx}/>
      )
    })
  }

  return(
    <div className="box feed">
      {renderPosts()}
    </div>
  )
}