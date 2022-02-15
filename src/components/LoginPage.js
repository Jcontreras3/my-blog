import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
export default function loginPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <h1>Login to your account</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-5">
        <Col lg={3}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Your Email"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col lg={3}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Your Password"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col lg={1}>
          <Button>Login</Button>
        </Col>
      </Row>
    </Container>
  );
}
