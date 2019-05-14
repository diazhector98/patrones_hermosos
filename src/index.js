import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBk4KVq-s1ms-sjxdIoN-jVHNwyUtMn1m0",
    authDomain: "beautifulpatterns-165bc.firebaseapp.com",
    databaseURL: "https://beautifulpatterns-165bc.firebaseio.com",
    projectId: "beautifulpatterns-165bc",
    storageBucket: "beautifulpatterns-165bc.appspot.com",
    messagingSenderId: "810070954355",
    appId: "1:810070954355:web:0a1981be715060c9"
  };

  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
