// main page of the app
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// put the content at the center using bootstrap
export default function Main() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100">
            <Row>
                <Col className="text-center">
                    <h1>Main page</h1>
                    <p>Some additional content goes here.</p>
                </Col>
            </Row>
        </Container>
    );
}