import React, {useState} from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Data from "./data";

function App() {

  let [shoes, shoes변경] = useState(Data);



  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoeshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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

      <div className="main">
        <h1>20% Season Off</h1>
        <p>
          Here is Shoeshop. <br />
          If you want to get new Shoes, Come to My shop. You can get a nice
          Shoes here!
        </p>
        <button variant="primary">Check More!</button>
      </div>
      <div className="container">
        <div className="row">

          {shoes.map(
            function(shoe, idx){
              console.log(shoe)
              return(
                <div className="col-md-4">
                <img
                  alt={idx}
                  src="https://codingapple1.github.io/shop/shoes1.jpg"
                />
                <h4>{ shoe[idx].title }</h4>
                <p>{ shoe[idx].content }</p>
                <p>{ shoe[idx].price }</p>
              </div>
              )
            }
          )}

          <div className="col-md-4">
            <img
              alt="shoes1"
              src="https://codingapple1.github.io/shop/shoes1.jpg"
            />
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].content }</p>
            <p>{ shoes[0].price }</p>
          </div>
          <div className="col-md-4">
            <img
              alt="shoes2"
              src="https://codingapple1.github.io/shop/shoes2.jpg"
            />
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[1].content }</p>
            <p>{ shoes[1].price }</p>
          </div>
          <div className="col-md-4">
            <img
              alt="shoes3"
              src="https://codingapple1.github.io/shop/shoes3.jpg"
            />
            <h4>{ shoes[2].title }</h4>
            <p>{ shoes[2].content }</p>
            <p>{ shoes[2].price }</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;


