     // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBzrJLQasUlsldMrz_yWCxj0rEctYXFXtk",
    authDomain: "hshacksdb.firebaseapp.com",
    databaseURL: "https://hshacksdb-default-rtdb.firebaseio.com",
    projectId: "hshacksdb",
    storageBucket: "hshacksdb.appspot.com",
    messagingSenderId: "982420069087",
    appId: "1:982420069087:web:8ccf40c0e3fe2b1fe3276a",
    measurementId: "G-MTLH0BV1MG"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();