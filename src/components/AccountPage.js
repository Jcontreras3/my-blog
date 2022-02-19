import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { createAccount } from '../Services/DataService';

export default function AccountPage() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = () => {
    let userData = {
      Id:0,
      Username,
      Password
    }
   createAccount(userData);
  }
  return (
    <Container>
      <Row>
        <Col
          className="mt-5 BgSilver Border"
          // style={{ backroundColor: 'gray', borderRadius: 5, padding: 50 }}
        >
          <h1>Create Account</h1>
          <Form>
            <Form.Group className="mb-3" controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={({target}) => setUsername(target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" 
              placeholder="Password"
              onChange={({target:{value}}) => setPassword(value)}/>
            </Form.Group>
            <Button
             variant="primary"
             onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
