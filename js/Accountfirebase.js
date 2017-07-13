// Initialize Firebase
(function(){
  const config = {
    apiKey: "AIzaSyDQoSITxgVlt3DPJKp6ESovi5dzIABuyvE",
    authDomain: "cart-savy.firebaseapp.com",
    databaseURL: "https://cart-savy.firebaseio.com",
    projectId: "cart-savy",
    storageBucket: "cart-savy.appspot.com",
    messagingSenderId: "511411877096"
  };
  firebase.initializeApp(config,"Secondary");



  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupbtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const passwordSU = document.getElementById('passwordsu')
  const emailSU = document.getElementById('emailsu')
  const user = firebase.auth().currentUser;


  });
  // logout click listener
  logoutBtn.addEventListener('click', e => {
    firebase.auth().signOut();
  });
  //  login listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        console.log(firebaseUser);
      }else{
        console.log('not logged in');
        logoutBtn.classlIst.add('hide');

      }

});
