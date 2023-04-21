import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  //리액트의 돔. 인덱스.html 가보면 지금 head, body. body 안에 div 딱 하나 있다. 이 div가 root가 되고 가상돔.
root.render(
//  <React.StrictMode>
    <App /> 
//  </React.StrictMode>
);// <App/> jsx. 태그처럼 생겼다. 사용자정의태그. 기존의 태그들은 전부 소문자로 시작. 대문자로 시작하는 태그가 사용자 정의태그. App.js 가봐

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
