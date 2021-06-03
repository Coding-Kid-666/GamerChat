function add_user(){
    my_User = document.getElementById("user_name").value;
    localStorage.setItem("username", my_User);
    window.location = "GamerChat_room.html";
}