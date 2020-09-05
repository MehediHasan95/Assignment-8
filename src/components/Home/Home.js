import React, { useState, useEffect } from "react";
import FakeData from "../FakeData/FakeData";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((Data) => setPosts(Data));
  }, []);

  return (
    <div>
      <h1>Total Posts: {posts.length}</h1>
      {posts.map((post) => (
        <FakeData postData={post}></FakeData>
      ))}
    </div>
  );
};

export default Home;
