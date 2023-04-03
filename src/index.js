import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 0},
    {id: 2, message: 'Its my first posts', likesCount: 23}
]

let dialogs = [
    {id: 1, name: 'Loh1'},
    {id: 2, name: 'Loh2'},
    {id: 3, name: 'Loh3'},
    {id: 4, name: 'Loh4'},
    {id: 5, name: 'Loh5'},
    {id: 6, name: 'Loh6'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi123'},
    {id: 3, message: 'Hi54'},
    {id: 4, message: 'Hi45'},
    {id: 5, message: 'Hi87'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
