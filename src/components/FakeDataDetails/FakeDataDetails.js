import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./FakeDataDetails.css";
import Comment from "../Comment/Comment";

const FakeDataDetails = () => {
  const { fakeId, postId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments/${fakeId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="FakeData-2">
      <h3>Name: {details.name}</h3>
      <h4>Email: {details.email}</h4>
      <p>Comment: {details.body}</p>
      <button>
        <Link to={`/Comment/${postId}`}>Show all comments</Link>
      </button>
    </div>
  );
};

export default FakeDataDetails;
