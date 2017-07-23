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
  var user = firebase.auth().currentUser;

  var name, email, photoUrl, uid, emailVerified;
  const emailTxtPut = document.getElementById("emailSec")

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      console.log(email, uid);
      getData(uid);

    } else {
      console.log("not logged in");
      window.location = "/../login.html"
    }
  });

  logoutBtn.addEventListener('click', user => {
    firebase.auth().signOut();
  });



});

function getData(prospectId) {
  var database = firebase.database();

  database.ref(prospectId).once('value').then(function(snapshot) {
    var prospectId = snapshot.key;
    i = 1;
    snapshot.forEach(function(snapshot1) {
      console.log(snapshot1.key);
      var prodName = snapshot1.val().product_name_en;
      var prodIngredients = snapshot1.val().ingredients_text;
      var prodImageURL = snapshot1.val().image_url;
      var des = document.createElement("P");
      var fridgeTable = document.getElementById("demotb");

      fridgeTable.innerHTML += "<tr id='row" + i + "'></tr>";
      document.getElementById("row" + i).innerHTML += "<td id='imgHolder" + i + "'></td>";
      if (prodImageURL) {
        document.getElementById("imgHolder" + i).innerHTML = "<img id='prodimageurl' src='" + prodImageURL + "'>" // show_image(prodImageURL, 200, 200, prodName);
      } else {
        document.getElementById("imgHolder" + i).innerHTML = "<img src='https://uos.edu.pk/assets/backend/images/staff/imagenotfound.svg'  height='200px'width='200px'>"
      }
      document.getElementById("row" + i).innerHTML += "<td id='infoHolder" + i + "' class='infoclass' data-id='" + snapshot1.key + "'></td>";
      document.getElementById("infoHolder" + i).innerHTML += "<h4><strong>" + prodName + "</strong></h4>"
      document.getElementById("infoHolder" + i).innerHTML += "<br/>"

      if (prodIngredients) {
        document.getElementById("infoHolder" + i).innerHTML += "<p>" + prodIngredients + "</p>";
      }
      document.getElementById("infoHolder" + i).innerHTML += "<br/>"
      document.getElementById("infoHolder" + i).innerHTML += "<button class='btn btn-default' id='btnDelete'>X</button>"
      $("ig").css("width", "200px");

      $('#btnDelete').click(function() {
        console.log('delete: ' + $(this).parent().attr('data-id'));
        var key = $(this).parent().attr('data-id');

        var user = firebase.auth().currentUser;
        var uid = user.uid;

        var database = firebase.database();
        database.ref(uid).once('value').then(function(snapshot) {
          snapshot.forEach(function(child) {
            // console.log(child.key);
            if (child.key == key) {
              console.log(child.key);
              firebase.database().ref(uid).child(key).remove();

            }
          });
        });


      });
      i++;
    });
    if ($('#demotb').html().length == 0) {
      var fridgeTable = document.getElementById("demotb");
      fridgeTable.innerHTML += "<tr id='row'></tr>";
      document.getElementById("dl").innerHTML += "<p>It looks like its empty. Download the app to get started!</p>"
      document.getElementById("dl").innerHTML += "<button class='btn btn-default pull-center'>Download Now!</button>";
    }
  });

}
