import { useState } from "react";

const CommentField = () => {
  const [comment, setComment] = useState("")

  return (
    <div>
      <h1>Comment: {comment}</h1>
      <input type="text" value={comment} onChange={event => setComment(event.target.value)}></input>
    </div>
  );
}

export default CommentField;
