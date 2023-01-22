import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfavCa5GbjbaorQFek50EqrX4L8_4LIXk",
  authDomain: "arkcomputacion-6316c.firebaseapp.com",
  projectId: "arkcomputacion-6316c",
  storageBucket: "arkcomputacion-6316c.appspot.com",
  messagingSenderId: "858142053449",
  appId: "1:858142053449:web:50f1740140fa3e1b6a9b98"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

reportWebVitals();
