import React from "react";
import { Row, Col, Container, Carousel, Card } from "react-bootstrap";
import "../Blog.css";
import Blog from "../Assests/Blog.jpg";
import NiceBg from "../Assests/NiceBg.jpg";
import Bg2 from "../Assests/Nicebg2.jpg";

export default function BlogPage() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 Size"
                src={Blog}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 Size"
                src={NiceBg}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 Size" src={Bg2} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-3" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Title</Card.Title>
              <Card.Text>Publish Name</Card.Text>
              <Card.Text>Date</Card.Text>
              <img src="" alt />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Text>
                <Card.Title className="text-center">Description</Card.Title>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Text>
                <Card.Title className="text-center">Description</Card.Title>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Title</Card.Title>
              <Card.Text>Publish Name</Card.Text>
              <Card.Text>Date</Card.Text>
              <img src="" alt />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-3" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Title</Card.Title>
              <Card.Text>Publish Name</Card.Text>
              <Card.Text>Date</Card.Text>
              <img src="" alt />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Text>
                <Card.Title className="text-center">Description</Card.Title>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Text>
                <Card.Title className="text-center">Description</Card.Title>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Title</Card.Title>
              <Card.Text>Publish Name</Card.Text>
              <Card.Text>Date</Card.Text>
              <img src="" alt />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
