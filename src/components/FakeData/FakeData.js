import React from "react";
import "./FakeData.css";
import { Button, Container, CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";

const FakeData = (props) => {
  const { userId, id } = props.postData;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="FakeData">
          <h1>UserID-{userId}</h1>
          <h2>ID-{id}</h2>
          <Button color="secondary">
            {" "}
            <Link to={`/FakeDataDetails/${id}`}>More Details</Link>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FakeData;
