const firebase = require("firebase/app");
require("firebase/database");

let firebaseConfig = {
  apiKey: "AIzaSyDlAKUE7jzCkjlrEc-bShSqC4Z2FjvAJ9E",
  authDomain: "database-clio.firebaseapp.com",
  databaseURL: "https://database-clio.firebaseio.com",
  projectId: "database-clio",
  storageBucket: "database-clio.appspot.com",
  messagingSenderId: "628150845707",
  appId: "1:628150845707:web:d6607d784044b95fa3620e",
  measurementId: "G-70ZNTYYYBW",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

module.exports = firebase;
