import { useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Col, Row  } from 'react-bootstrap';
import bg from './img/bg.png'
import data from './data.js'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></div>
      <Container>
      <Row>
        {
          shoes.map(function(a,i){
            return(
              <Product shoes={shoes} i={i}/>
            )
          })
        }
      </Row>
    </Container>
    </div>
  );
}

function Product(props){
  return(
    <Col>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
      <h4>{ props.shoes[props.i].title }</h4>
      <p>{ props.shoes[props.i].content }</p>
    </Col>
  )
}

export default App;
