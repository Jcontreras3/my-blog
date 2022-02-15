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

export default function AccountPage() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Card style={{ width: "18rem" }}>
            <Card.Title className="text-center mt-3">
              Don't have an account? Create one!
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
            </Card.Body>
            <Col className="d-flex justify-content-center mb-3">
              <Button>Create</Button>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
