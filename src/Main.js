import React, { useContext, useState, useHistory } from "react";
import { Link } from "react-router-dom";
import { 재고context } from "./App.js";
import axios from "axios";
import Loading from "./Loading";

function Main(props) {
  let 재고 = useContext(재고context);

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
    <>
      <div className="main">
        <h1>20% Season Off</h1>
        <p>
          Here is Shoeshop.
          <br />
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
          {props.shoes.map((a, idx) => {
            console.log(a);
            return <Card item={a} key={idx} />;
          })}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            //로딩중이라는 UI 띄움
            props.로딩상태변경(true);

            //서버에게 post 요청

            //axios.post('서버URL', { id : 'adbc', pw : 1234 });

            //서버에 header 요청...
            //서버에게 쿠키 요청...

            //서버에게 get 요청

            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then(
                (res) => {
                  //로딩중이라는 UI 삭제 (이제 성공함)

                  props.로딩상태변경(false);

                  /* let 데이터추가 = () => {
       내 코드
        let newShoes = [...shoes];
        let newData = [...res.data]
        newData.map((a)=>{
          newShoes.push(a);
        });

        shoes변경(newShoes);
        console.log(newShoes)

        
    }
    데이터추가()*/

                  props.shoes변경([...props.shoes, ...res.data]);
                } //성공
              )
              .catch(() => {
                //로딩중이라는 UI 삭제 (이제 성공함)
                props.로딩상태변경(false);
                console.log("실패");
              });
            //실패
          }}
        >
          더보기
        </button>

        {props.로딩상태 ? <Loading /> : null}
      </div>
    </>
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
function Card(props) {
  let 재고 = useContext(재고context);
  // let history = useHistory();
  // onClick={()=> { history.push(`/detail/`+props.i) }}
  return (
    <div className="col-md-4" >
    <Link to={"/detail/" + props.item.id}>
      
        <img
          alt={props.item.id}
          src={
            `https://codingapple1.github.io/shop/shoes` +
            (props.item.id + 1) +
            `.jpg`
          }
        />
        {console.log(props)}
        <h4>{props.item.title}</h4>
        <p>{props.item.content}</p>
        <p>{props.item.price}</p>
        <p>수량 : {재고[props.item.id]}</p>
    </Link>
    </div>
  );
}

export default Main;
