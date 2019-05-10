import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBSlxnAfphUN4wHbmfiaOyHyAe1P_HIUNw",
    authDomain: "cs554-finalproject.firebaseapp.com",
    databaseURL: "https://cs554-finalproject.firebaseio.com",
    projectId: "cs554-finalproject",
    storageBucket: "cs554-finalproject.appspot.com",
    messagingSenderId: "971828964333",
    appId: "1:971828964333:web:b2369bd97f1eea14"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;