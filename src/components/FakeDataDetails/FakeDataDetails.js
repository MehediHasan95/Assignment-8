import React from "react";
import { useParams } from "react-router-dom";

const FakeDataDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Connected! {id}</h1>
    </div>
  );
};

export default FakeDataDetails;
