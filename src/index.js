import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/ReduxStore";
import StoreContext, {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree =() => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        /*state={store.getState()}
                        dispatch={store.dispatch.bind(store)}
                        store={store}*/
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();