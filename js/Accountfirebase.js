// Initialize Firebase
$(function() {
    console.log("ready!");
    firebase.initializeApp({
      apiKey: "AIzaSyDQoSITxgVlt3DPJKp6ESovi5dzIABuyvE",
      authDomain: "cart-savy.firebaseapp.com",
      databaseURL: "https://cart-savy.firebaseio.com",
      projectId: "cart-savy",
      storageBucket: "cart-savy.appspot.com",
      messagingSenderId: "511411877096"
    });

    const logoutBtn = document.getElementById("logoutBtn");
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    const emailTxtPut = document.getElementById("emailSec")
    // logout click listener
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        console.log(email);
        $('#emailSec').text("Hi, "+email);



      } else {
        console.log("not logged in");
        window.location = "/../login.html"
      }

    });


  logoutBtn.addEventListener('click', user => {
    firebase.auth().signOut();
  });



});
