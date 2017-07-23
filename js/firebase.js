// Initialize Firebase
(function() {
  const config = {
    apiKey: "AIzaSyDQoSITxgVlt3DPJKp6ESovi5dzIABuyvE",
    authDomain: "cart-savy.firebaseapp.com",
    databaseURL: "https://cart-savy.firebaseio.com",
    projectId: "cart-savy",
    storageBucket: "cart-savy.appspot.com",
    messagingSenderId: "511411877096"
  };

  var FbApp = firebase.initializeApp(config);

  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('password');
  const txtFirstname = document.getElementById("firstname");
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupbtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const passwordSU = document.getElementById('passwordsu')
  const emailSU = document.getElementById('emailsu')

  // add clicklistener
  loginBtn.addEventListener('click', e => {

    const email = txtEmail.value;
    const password = txtPassword.value
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

    if(promise === "auth/user-not-found") {
              alert("User does not exist - go ahead and sign up first");
              return;
          } else if(promise === "auth/wrong-password") {
              alert("You might have the wrong password, try again");
              return;
          }



  });
  //signup click event
  signupBtn.addEventListener('click', e => {
    const email = emailSU.value;
    const password = passwordSU.value
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });
  // // logout click listener
  // logoutBtn.addEventListener('click', e => {
  //   firebase.auth().signOut();
  // });
  //  login listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      var user = firebase.auth().currentUser;
      const name = txtFirstname.value;

      window.location = '../account.html'
    } else {
      console.log('not logged in');

    }
  });

}());
function comingSoon() {
    alert("Coming Soon");
}
