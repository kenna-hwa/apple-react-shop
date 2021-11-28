import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

let store = createStore(()=>{
  return [{ id : 0, name: '멋진 신발', quan: 2 }, { id : 1, name: '예쁜 신발', quan: 5 }, { id : 2, name: '더 멋진 신발', quan: 4 }, { id : 3, name: '웅장한 신발', quan: 2 }, { id : 4, name: '작은 신발', quan: 2 }, { id : 5, name: '높은 신발', quan: 7 }, { id : 6, name: '낮은 신발', quan: 4 }]
}); // 리턴하는 콜백함수 넣기

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

