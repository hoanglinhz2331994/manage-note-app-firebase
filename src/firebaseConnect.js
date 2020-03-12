import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDkIXvKyx2xEd3HjRyNmiyhmm0aRZmuD2M",
    authDomain: "notereact-afccf.firebaseapp.com",
    databaseURL: "https://notereact-afccf.firebaseio.com",
    projectId: "notereact-afccf",
    storageBucket: "notereact-afccf.appspot.com",
    messagingSenderId: "911980509377",
    appId: "1:911980509377:web:e4aa9b9ca4538d3f6d3c40",
    measurementId: "G-16DGR3TN39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const noteData = firebase.database().ref('dataForNote');