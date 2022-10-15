import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // src/App.tsxからAppをインポートする
import Hello from './components/Hello' // src/compoments/Hello.tsxからHelloをインポートする
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/useStateSample';
import Counter2 from './components/useReducerSample';
import reportWebVitals from './reportWebVitals';
import MemoParent from './components/Parent';

const root = ReactDOM.createRoot(
	// index.htmlにあるrootをIDに持つ要素を指定している
  document.getElementById('root') as HTMLElement
);

root.render(
	// 描画するHTML要素(JSXタグという)を指定している
	// 不適切なコードを検知するためのヘルパー
  <React.StrictMode> 
    <App />
    <Hello />
    <Parent />
    <Page />
    <Counter initialValue={1}></Counter>
    <Counter2 initialValue={2}></Counter2>
    <MemoParent></MemoParent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
