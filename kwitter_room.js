
var firebaseConfig = {
      apiKey: "AIzaSyB05b6HgqmpdBPRFZKie3zxAJeRZQq-uaM",
      authDomain: "kwitter-ebe1b.firebaseapp.com",
      databaseURL: "https://kwitter-ebe1b-default-rtdb.firebaseio.com",
      projectId: "kwitter-ebe1b",
      storageBucket: "kwitter-ebe1b.appspot.com",
      messagingSenderId: "180261853073",
      appId: "1:180261853073:web:79102475453216cd99ec30"
    };

      firebase.initializeApp(firebaseConfig);
      var user_name=localStorage.getItem('user');
      document.getElementById('user_name').innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}

room=document.getElementById('room').value