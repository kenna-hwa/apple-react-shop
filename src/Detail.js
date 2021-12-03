import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import './Detail.scss'
import Info from './Info.js';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";

let 박스 = styled.div`
padding : 20px;
`;
let 제목 = styled.h4`
font-size: 25px;
color: ${ props => props.색상 }
`


function Detail(props){

    // alert를 컴포넌트처럼 상태로 만들기
    let [alert, alert변경] = useState(true);
    // let [인풋, 인풋변경] = useState('')
    let history = useHistory();
    let { id } = useParams();
    //tab
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);
    let [수량, 수량변경] = useState(0);

    useEffect(() => {
        // 컴포넌트가 실행될 때 같이 계속 실행됨 (componentDidMount)

        // 페이지 방문 2초 후 사라지게
        let timer = setTimeout(()=>{

            alert변경(false);
            console.log(alert)
    
        },2000);

        // componentWillUnMount 타이머 해제 스킬
        return function() {
            clearTimeout(timer)
        }
    },[alert]);

    //alert 컴포넌트가 실행될 때만

    // useEffect 여러개 쓰기
    
   /* useEffect(() => {
        // 컴포넌트가 실행될 때 같이 계속 실행됨 (componentDidMount)

        // 페이지 방문 2초 후 사라지게
        let timer = setTimeout(()=>{

            alert변경(true);
            console.log(alert)
    
        },4000);

        // componentWillUnMount
        return function() {

        }
    },[]);*/

    //훅

     let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id;
     })



    return(
        <div className="container">

            <박스>
            <제목 className="red">Detail</제목>
            </박스>
        
        {/* <input onChange={(e)=>{인풋변경(e.target.value)}} />
        {인풋} */}
        {alert ? <div className="my-alert2"><p>재고가 얼마 남지 않았습니다!</p></div> : null}
        
        <div className="row">
            <div className="col-md-6">
            <img
      alt={ id }
      src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id)+1) +'.jpg'}
      width="100%"
    />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}</p>
              <span> 구매수량 : </span> <input className="input" type="text" onChange={(e)=>{수량변경(e.target.value)}} />
              <Info info={props.info[id]} />
              <button  className="btn btn-danger" onClick={()=>{
                   let Array = [...props.info]
                   Array[id] = Array[id]-1
                  props.dispatch({ type: "항목추가", payload :{ id: 찾은상품.id, name: 찾은상품.title, quan: {수량}} })
                  history.push('/cart');
            }}>장바구니</button>
              <button className="btn btn-danger" onClick={()=>{ 
                 
                  let Array = [...props.info]
                  Array[id] = Array[id]-1
                    // props.재고변경(Array);
                  }}>주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{ history.goBack()
            //history.push('/원하는url')
            }}>뒤로가기</button> 
            </div>

            <Nav className="mt-5 " variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link className="mt-5" eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0)}}>1번</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mt-5" eventKey="link-1" onClick={()=>{스위치변경(false); 누른탭변경(1)}}>2번</Nav.Link>
                </Nav.Item>
            </Nav>  
        <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
        </CSSTransition>
          </div>
      </div> 
    )
}


function TabContent(props){

    useEffect(()=>{
        props.스위치변경(true);
    });

    if(props.누른탭 === 0){
        return <div className="mt-5 mb-5" >0번째입니다.</div>
    }else if(props.누른탭 === 1){
        return <div className="mt-5 mb-5" >1번째입니다.</div>
    }else if(props.누른탭 === 2){
        return <div className="mt-5 mb-5" >2번째입니다.</div>
    }

}
function makeProps(state){
    return {
        state : state.reducer,
        alert열렸니 : state.reducer2
        //store안에 있던 모든 데이터를 state라는 이름의 props로 바꿈
    }
}
 


export default connect(makeProps)(Detail);
