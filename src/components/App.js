import video from "../data/video.js";
import Comment from "./Comment.jsx";
import React, { useState } from "react";

function App() {

  const [upVote, setUpVote] = useState(video.upvotes);
  const [downVote, setDownVote] = useState(video.downvotes);
  const [isHidden, setIsHidden] = useState(false);
const thumbsUp = () => {
  setUpVote(upVote + 1);
}
const thumbsDown = () => {
  setDownVote(downVote + 1);

}

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
    
    <h2>{video.title}</h2>
    <span>{video.views} Views | Uploaded {video.createdAt}</span>
    <div><button onClick={thumbsUp}>👍{upVote}</button><button onClick={thumbsDown}>👎{downVote}</button></div>
    <div className="hideComments" ><button onClick={() =>{setIsHidden(!isHidden)}}>Hide Comments</button></div>
    <div><h2>{video.comments.length} Comments</h2></div>
    {!isHidden ? null : <div>{video.comments.map((comment) =>{
    
    return <Comment key={comment.id} comment={comment.comment} user={comment.user}/>

  })}</div>}

    </div>
  );
}

export default App;
