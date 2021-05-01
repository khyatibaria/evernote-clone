import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import reportWebVitals from './reportWebVitals';


firebase.initializeApp({
    apiKey: "AIzaSyDbOQhruh6sk8qMQjmUZ4wqW7fTh4ANquA",
    authDomain: "evernote-1f34a.firebaseapp.com",
    projectId: "evernote-1f34a",
    storageBucket: "evernote-1f34a.appspot.com",
    messagingSenderId: "780807755562",
    appId: "1:780807755562:web:7d9cf5370cdf514e5a7053"
});


ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
