import React, { useState, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Main from "./Main"
import Data from "./data";
import Detail from "./Detail";
import Cart from "./Cart";
import { Link, Route, Switch } from 'react-router-dom'

export let 재고context = React.createContext();

function App() {

  

  let [shoes, shoes변경] = useState(Data);
  let [로딩상태, 로딩상태변경] = useState(false);
  let [재고, 재고변경] = useState([10,11,12]);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoeshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        {/* 택1 해주세요 중복비허용*/}
      <Route exact path="/">
      <재고context.Provider value={재고}>
        <Main shoes={ shoes } shoes변경={shoes변경} 로딩상태={로딩상태} 로딩상태변경={로딩상태변경}/>
      </재고context.Provider>
      </Route>
      <Route exact path="/detail/:id">
        {/* 파라미터  id 부분은 내가 작명 */}
      <재고context.Provider value={재고}>
        <Detail shoes={ shoes } info={재고} 재고변경={재고변경} />
      </재고context.Provider>
      </Route>
      <Route exact path="/cart">

        <Cart shoes={ shoes } shoes변경={shoes변경} 로딩상태={로딩상태} 로딩상태변경={로딩상태변경}/>

      </Route>
      </Switch>
     
    
    </div>
  );






}


export default App;


