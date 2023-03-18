import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqOB6YiulaVhtOXurAHey0jwocJK8atGc",
    authDomain: "e-commerce-villarreal.firebaseapp.com",
    projectId: "e-commerce-villarreal",
    storageBucket: "e-commerce-villarreal.appspot.com",
    messagingSenderId: "378897530855",
    appId: "1:378897530855:web:488cd4727121162a838742"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
