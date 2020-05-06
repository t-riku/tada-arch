import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Main from './Main';
import News from './News';

function App() {
  return (
    <div>
    <Main/>
    <News/>
    </div>
  );
}

export default App;
