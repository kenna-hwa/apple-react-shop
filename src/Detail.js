import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";
import './Detail.scss'

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
    let [인풋, 인풋변경] = useState('')
    let history = useHistory();
    let { id } = useParams();

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
        
        <input onChange={(e)=>{인풋변경(e.target.value)}} />
        {인풋}
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
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{ history.goBack()
            //history.push('/원하는url')
            }}>뒤로가기</button> 
            </div>
          </div>
      </div> 
    )
}




export default Detail;


class Detail2 extends React.Component{
    componentDidMount(){
// 컴포넌트가 실행되기 시작할 때
// ajax 같은 것들을 여기에 넣는다.
    }
    componentWillUnmount(){
// 컴포넌트가 시야에서 사라질 때
    }
}