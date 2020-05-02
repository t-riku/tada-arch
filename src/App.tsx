import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Button block>1 of 1</Button>
        </Col>
        <Col>
          <Button block>1 of 2</Button>
        </Col>
      </Row>
      <Row>
      <Col>
          <Button block>2 of 1</Button>
        </Col>
        <Col>
          <Button block>2 of 2</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
