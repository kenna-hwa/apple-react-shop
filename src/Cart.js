import React from 'react';
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from 'react-redux';
import "./Detail.scss"

function Cart(props){

  let state = useSelector((state)=>state.reducer);
  let dispatch = useDispatch();
  console.log(state)
    console.log(props.state)
    return(
        <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {/* 내가 작성한 코드 {props.state.map((shoes)=>{

            return <tr>
            <td>{shoes.id + 1}</td>
            <td>{shoes.name}</td>
            <td>{shoes.quan}</td>
            <td><button>삭제</button></td>
          </tr>

        })} */}
        {/* {
            props.state.map((a, i)=>{
                return(
                    <tr key={i}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.quan}</td>
                        <td><button onClick={()=>{props.dispatch({ type: '수량증가' })}}>+</button><button onClick={()=>{props.dispatch( {type: '수량감소' })}}>-</button></td>
                    </tr>)
            })
        }  */}

        {   
            state.map((a, i)=>{
                return(
                    <tr key={i}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.quan}</td>
                        <td><button onClick={()=>{dispatch({ type: '수량증가', data : a.id})}}>+</button><button onClick={()=>{dispatch( {type: '수량감소', data : a.id})}}>-</button></td>
                    </tr>)
            })
        } 
      </Table>
       {props.alert열렸니 ?     
      (<div className="container">
          <p className="my-alert2">지금 구매하시면 신규 할인 20%</p>
          <button className="mt-1" onClick={()=>{props.dispatch({type: "alert닫기"})}}>알겠어요</button>
      </div>)
    : null  
    }
  
    </div>
    )
}

//store 안의 데이터를 가져오는 역할의 함수
//redux의 store 데이터 가져와서 props로 변환해주는 함수
//state를props화
// function makeProps(state){
//     return {
//         state : state.reducer,
//         alert열렸니 : state.reducer2
//         //store안에 있던 모든 데이터를 state라는 이름의 props로 바꿈
//     }
// }

// export default connect(makeProps)(Cart);
export default Cart;

//store 안의 데이터를 가져오는 역할의 함수
//redux의 store 데이터 가져와서 props로 변환해주는 함수
//state를props화
// function makeProps(state){
//   return {
//       state : state.reducer,
//       alert열렸니 : state.reducer2
//       //store안에 있던 모든 데이터를 state라는 이름의 props로 바꿈
//   }
// }

// export default connect(makeProps)(Cart);
// export default Cart;
