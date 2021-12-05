import React, { useEffect } from 'react';
import './now.css';




function Now(props){
    useEffect(()=>{
        localStorage.setItem('watched','[]')
        
    })
    

    var arr = localStorage.getItem('watched');
        arr = JSON.parse(arr);

    return <div className="now-container">
        <p>지금 본 상품이에요!</p>
        <p>
        {   
            arr.map((a)=>{
                return <div>{props.shoes[a].title}</div>
            })
        }
        </p>
    </div>

}

export default Now;