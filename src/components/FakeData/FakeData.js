import React from "react";
import "./FakeData.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const FakeData = (props) => {
  const { userId, id } = props.postData;
  return (
    <div className="FakeData">
      <h1>UserID-{userId}</h1>
      <h2>ID-{id}</h2>
      <Button color="secondary">
        {" "}
        <Link to={`/FakeDataDetails/${id}`}>More Details</Link>
      </Button>
    </div>
  );
};

export default FakeData;
