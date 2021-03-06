import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routing from './Routing';
import { store } from './store';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import './index.css';
import 'antd/dist/antd.css'; 

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
