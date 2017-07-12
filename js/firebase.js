// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQoSITxgVlt3DPJKp6ESovi5dzIABuyvE",
  authDomain: "cart-savy.firebaseapp.com",
  databaseURL: "https://cart-savy.firebaseio.com",
  projectId: "cart-savy",
  storageBucket: "cart-savy.appspot.com",
  messagingSenderId: "511411877096"
};
firebase.initializeApp(config);
var database = firebase.database();
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
$(document).ready(function() {
    $('#sinup').click(function() {
      foo($('#email').val());
      foo($('#password').val());
    });
});
