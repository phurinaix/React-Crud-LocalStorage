import React from 'react';
import './App.css';
import Crud from './components/Crud';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>CRUD</h1>
        <Crud/>
      </Container>
    </div>
  );
}

export default App;
