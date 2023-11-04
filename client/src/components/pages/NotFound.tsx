import React from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";

// 404 page
// let the 404 message be the center of the page using bootstrap
export default function NotFound() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col className="text-center">
          <h1>404</h1>
          <p>Page Not Found</p>
        </Col>
        <Alert variant="danger" >
          <Row>
            page you are looking for does not exist
          </Row>
          <Row>
            <Alert.Link href="/">Back to Home Page</Alert.Link>
          </Row>
        </Alert>
      </Row>
    </Container>
  );
};

