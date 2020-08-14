import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBK4wzXKHOhUjiXy_EQRH4uZgoQatmU5NY",
    authDomain: "react-demo-c3ac9.firebaseapp.com",
    databaseURL: "https://react-demo-c3ac9.firebaseio.com",
    projectId: "react-demo-c3ac9",
    storageBucket: "react-demo-c3ac9.appspot.com",
    messagingSenderId: "1056589186723",
    appId: "1:1056589186723:web:d3e0d55bebdaec065ee116",
    measurementId: "G-BQ5572PQZX"
};
// Initialize Firebase
firebase.initializeApp(config);


export default firebase