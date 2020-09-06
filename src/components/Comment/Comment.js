import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comment = () => {
  const { postId } = useParams();
  const [comment, setComment] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  return (
    <div>
      <h1>ALLL Comment: {comment.postId}</h1>
      <p>{comment.name}</p>
    </div>
  );
};

export default Comment;
