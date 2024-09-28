import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyImage() {
  return (
    <div>ㅓ
      <img src="https://i.imgur.com/ZF6s192.jpg" alt="Floralis Genërale"/>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <MyImage />
      <MyImage />
      <MyImage />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App user = "Hamin" count={5} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
