import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

// let store = createStore(()=>{
//   return [{ id : 0, name: '멋진 신발', quan: 2 }, { id : 1, name: '예쁜 신발', quan: 5 }, { id : 2, name: '더 멋진 신발', quan: 4 }, { id : 3, name: '웅장한 신발', quan: 2 }, { id : 4, name: '작은 신발', quan: 2 }, { id : 5, name: '높은 신발', quan: 7 }, { id : 6, name: '낮은 신발', quan: 4 }]
// }); // 리턴하는 콜백함수 넣기




//데이터 수정하는 방법 정의

//기본값을 설정해주고
let 기본state = [{ id : 0, name: '멋진 신발', quan: 2 }, { id : 1, name: '예쁜 신발', quan: 5 }, { id : 2, name: '더 멋진 신발', quan: 4 }, { id : 3, name: '웅장한 신발', quan: 2 }, { id : 4, name: '작은 신발', quan: 2 }, { id : 5, name: '높은 신발', quan: 7 }, { id : 6, name: '낮은 신발', quan: 4 }]

//다른 종류의 데이터

let alert초기값 = true;


//reducer(데이터수정함수)설정
//state=기본state는 default parameter 문법으로 ES6문법
 function reducer(state=기본state, 액션){
    if(액션.type === "항목추가"){

      //id가 같은 상품이 state에 있으면 push 하지 말고 id가 같은 상품의 quan 을 1 증가
      let found = state.findIndex((a)=>{
        return a.id = 액션.payload.id;
      })
      if(found >= 0){
      let copy = [...state];  
      copy[found].quan = 액션.payload.quan;
      return copy

      }else{
      let copy = [...state];

        copy.push(액션.payload);
        return copy;
      }


    } else if(액션.type === '수량증가'){

     let 카피 = [...state];
     카피[액션.data].quan++;
     return 카피;
     //return 수정된state

   }else if(액션.type === '수량감소'){
    let 카피 = [...state];
    카피[액션.data].quan--;
    return 카피;
    //return 수정된state

  }else{
    return state;
   }
  //reducer 함수는 항상 state 데이터를 뱉어야함
 }



//또 다른 reducer

function reducer2(state=alert초기값, 액션){

  if(액션.type === 'alert닫기'){
    let alert카피 = state;
    alert카피 = false;
    return alert카피;
  }else{
    return state;
  }

  
}


//store를 설정
let store = createStore(combineReducers({ reducer, reducer2 }));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

