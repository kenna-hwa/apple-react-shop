import React from "react";
import { connect } from "react-redux";


function Info(props){

    return (
        <p>재고 : {props.info}</p>
    )
}

function makeProps(state){
    return {
        state : state.reducer,
        alert열렸니 : state.reducer2
        //store안에 있던 모든 데이터를 state라는 이름의 props로 바꿈
    }
}
 


export default connect(makeProps)(Info);
