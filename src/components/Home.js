import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Acme Limited</h1>
      </Jumbotron>
      <Button size="lg" variant="dark" style={{ marginRight: "1rem" }}>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
      </Button>
      <Button size="lg" variant="dark">
        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
          Signup
        </Link>
      </Button>
    </div>
  );
}

export default Home;
