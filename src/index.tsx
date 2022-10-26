import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // src/App.tsxからAppをインポートする
import Hello from './components/Hello' // src/compoments/Hello.tsxからHelloをインポートする
// import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/useStateSample';
import Counter2 from './components/useReducerSample';
import reportWebVitals from './reportWebVitals';
// import { Parent } from './components/Parent';
import { Parent } from './components/useCallbackSample';
import { UseMemoSample } from './components/useMemoSample';
import { Clock } from './components/Clock';

const root = ReactDOM.createRoot(
	// index.htmlにあるrootをIDに持つ要素を指定している
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode></React.StrictMode>
  <div>
    <App />
    {/* <Hello /> */}
    {/* <Parent /> */}
    {/* <Page /> */}
    <h1>カウンター</h1>
    <div>      
      <Counter initialValue={1}></Counter>
      <Counter2 initialValue={2}></Counter2>
      <Parent></Parent>
    </div>

    <h1>メモ化</h1>
    <div>
      <UseMemoSample></UseMemoSample>
    </div>

    <h1>タイマー</h1>
    <div>
      <Clock></Clock>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
