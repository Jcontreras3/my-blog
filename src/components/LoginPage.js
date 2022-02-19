import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function LoginPage() {
  let navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = () => {
    let userData = {
      Username,
      Password,
    };
    console.log(userData);
  };

  return (
    <Container>
      <Row>
        <Col
          className="mt-5 BgSilver Border"
          // style={{ backroundColor: 'gray', borderRadius: 5, padding: 50 }}
        >
          <h1>Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
          <h4>Don't have an account?</h4>
          <Button onClick={() => navigate("/Account")}>Create Account</Button>
        </Col>
      </Row>
    </Container>
  );
}
