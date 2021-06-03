
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtPJoVXSFzIkDf1frL5UtAod9CvuOOHYI",
  authDomain: "gamerchat-8898b.firebaseapp.com",
  databaseURL: "https://gamerchat-8898b-default-rtdb.firebaseio.com",
  projectId: "gamerchat-8898b",
  storageBucket: "gamerchat-8898b.appspot.com",
  messagingSenderId: "97669859706",
  appId: "1:97669859706:web:0cd811489d4f2ec3002ec3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    var user = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome, " + user + "!";

function addRoom(){
  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "GamerChat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "GamerChat_page.html"
}
function log_out(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
