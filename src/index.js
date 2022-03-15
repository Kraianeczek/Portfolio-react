import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.querySelector('#root')
);