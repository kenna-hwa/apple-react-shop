import React, {useState} from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Data from "./data";

function App() {

  let [shoes, shoes변경] = useState(Data);


  //내코드
  // function ProductList(){

  //   return shoes.map(function(shoes){
  //     return (<div className="col-md-4">
  //     <img
  //       alt={ shoes.id }
  //       src={`https://codingapple1.github.io/shop/shoes` + (shoes.id + 1) + `.jpg`}
  //     />
  //     <h4>{ shoes.title }</h4>
  //     <p>{ shoes.content }</p>
  //     <p>{ shoes.price }</p>
  //   </div>)
  //   })
  // }



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


        {/* 컴포넌트 내 반복문 사용 */}
        {/* <Card shoes={shoes} /> */}


        {/* 여러개 컴포넌트 사용 */}
        {/* <Card shoes={shoes[0]} />
        <Card shoes={shoes[1]} />
        <Card shoes={shoes[2]} />
        <Card shoes={shoes[3]} /> */}

        {/* 컴포넌트 반복 */}
        {
          shoes.map((a, idx)=>{
            return <Card shoes={shoes[idx]} i={idx} key={idx} />
          })
        }

        </div>
      </div>
    </div>
  );






}


//map 사용해서 컴포넌트 내에서 반복하기
  // function Card(props){

  //   return props.shoes.map(function(shoes){
  //         return (<div className="col-md-4">
  //         <img
  //           alt={ shoes.id }
  //           src={`https://codingapple1.github.io/shop/shoes` + (shoes.id + 1) + `.jpg`}
  //         />
  //         <h4>{ shoes.title }</h4>
  //         <p>{ shoes.content }</p>
  //         <p>{ shoes.price }</p>
  //       </div>)
  //       })
  // }

  //컴포넌트 여러개 생성해서 props 각각 전달하기 
  // function Card(props){

  //         return (<div className="col-md-4">
  //         <img
  //           alt={ props.shoes.id }
  //           src={`https://codingapple1.github.io/shop/shoes` + (props.shoes.id + 1) + `.jpg`}
  //         />
  //         <h4>{ props.shoes.title }</h4>
  //         <p>{ props.shoes.content }</p>
  //         <p>{ props.shoes.price }</p>
  //       </div>)
        
  // }

  //컴포넌트 자체 반복하기
  function Card(props){

    return (<div className="col-md-4">
    <img
      alt={ props.shoes.id }
      src={`https://codingapple1.github.io/shop/shoes` + (props.i + 1) + `.jpg`}
    />
    <h4>{ props.shoes.title }</h4>
    <p>{ props.shoes.content }</p>
    <p>{ props.shoes.price }</p>
  </div>)
  
}
export default App;


