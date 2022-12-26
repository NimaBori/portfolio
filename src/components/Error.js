import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Error = () => {
  return (
    <Container className="shadow mt-4 p-3 border rounded bg-light">
      <h2 className="mb-4 text-danger">page not found</h2>
      <Link className="text-info" to="/">
        Back to home page
      </Link>
    </Container>
  );
};

export default Error;
