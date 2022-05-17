import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {CartContextProvider} from './components/store/cart-context';

const firebaseConfig = {
  apiKey: "AIzaSyBRH6OJqtIFKIxfQvjsdy2g8sLLlfo9Yqk",
  authDomain: "castano-proyecto.firebaseapp.com",
  projectId: "castano-proyecto",
  storageBucket: "castano-proyecto.appspot.com",
  messagingSenderId: "556401515189",
  appId: "1:556401515189:web:46d2a59ecf7c3686f3fcfc"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
