import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function loginPage() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Card style={{ width: "18rem" }}>
            <Card.Title className="text-center mt-3">
              Login to your account
            </Card.Title>
            <Card.Body>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter In Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Button className="mx-3 Positioning">Login</Button>
              <Card.Link href="Account">Create Account?</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
  );
}
