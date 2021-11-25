import React, {useState} from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Main from "./Main"
import Data from "./data";
import Detail from "./Detail"
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'

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
        <Main shoes={ shoes } />
      </Route>
      <Route path="/detail/:id">
        {/* 파라미터  id 부분은 내가 작명 */}
        <Detail shoes={ shoes } />
      </Route>

      </Switch>
      <button className="btn btn-primary" onClick={ 
        () => { //서버에게 get 요청
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((res)=>{
    
            let 데이터추가 = () => {
                let newShoes = [...shoes];
                let newData = [...res.data]
                newData.map((a)=>{
                  newShoes.push(a);
                });

                shoes변경(newShoes);
                console.log(newShoes)
            }
            데이터추가()
          }//성공
          ) 
          .catch(()=>{
            console.log("실패")
          }) 
          //실패
          
        }
      }>더보기</button>

    </div>
  );






}


export default App;


