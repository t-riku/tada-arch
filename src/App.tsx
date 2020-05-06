import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Main from './Main';
import News from './News';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
    <Header/>  
    <Main/>
    <News/>
    <Footer/>
    </div>
  );
}

export default App;
