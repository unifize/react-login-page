import React, { useState } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

import { auth } from "./../config/firebase";

const Signup = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);

    const { email, password } = values;

    if (email && password) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
      } catch (err) {
        setError(err);
        throw err;
      }
    }
  };

  return (
    <div>
      <Jumbotron>
        <h1>Signup</h1>
      </Jumbotron>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={values.email}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <div style={{ marginBottom: "1rem" }}>
          <Link
            to="/login"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Login instead >
          </Link>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div style={{ color: "red" }}>
        {error && (
          <pre>
            <code>{JSON.stringify(error, null, 4)}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default Signup;
