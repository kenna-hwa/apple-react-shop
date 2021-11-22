import React, {useState} from "react";

function Main(props){
    
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


   return ( <>
   <div className="main">
           <h1>20% Season Off</h1>
           <p>
               Here is Shoeshop.<br />
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
                       console.log(a) 
                       return <Card item={a[idx]} i={idx} key={idx}
                       />;
                   })}

               </div>
    </div>
     </>
   )

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
  function Card(prams){

    return (<div className="col-md-4">
    <img
      alt={ prams.i }
      src={`https://codingapple1.github.io/shop/shoes` + (prams.i + 1) + `.jpg`}
    />
    {/* {console.log(prams)} */}
    <h4>{ prams.item }</h4>
    <p>{ prams.item }</p>
    <p>{ prams.item }</p>
  </div>)
  
}


export default Main;