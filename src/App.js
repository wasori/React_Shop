import { useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Col, Row  } from 'react-bootstrap';
import bg from './img/bg.png'
import data from './data.js'
import Detail from './routes/Detail.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <>
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
          </>
        }/>
        <Route path="/detail" element={<Detail/>}/>

        {/* <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path="*" element={<div>없는페이지요</div>}/> */}
      </Routes>
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

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
