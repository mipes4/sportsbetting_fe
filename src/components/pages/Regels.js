import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Regels() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>Title</Card>
        </Col>
        <Col xs={6}>Big piece of text</Col>
        <Col>Title</Col>
      </Row>
    </Container>
  );
}
