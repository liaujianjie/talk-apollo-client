import React from "react";
import "./style.css";

const Comment = ({ comment }) => (
  <div className="Comment">
    <h4 className="Comment--author">User {comment.owner.id}</h4>
    <p className="Comment--message">{comment.message}</p>
  </div>
);

export default Comment;
