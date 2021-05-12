import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

//Provider 使用无需再次监听redux状态
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

//监测redux状态的改变，改变重新渲染组件
// store.subscribe(()=>{
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );
// })