import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // importando o componente App para o projeto - npm install react-router-dom
import 'bootstrap/dist/css/bootstrap.css'; // importando o bootstrap para o projeto - npm install bootstrap
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// <App /> - component principal que será renderizado na tela (os demais componentes serão renderizados dentro dele)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eportWebVitals(); - não é necessário para o funcionamento do React - medir a performance do app
