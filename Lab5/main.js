function firstLast(){ //Function for grabbing users' name
    alert("Welcome, please enter your name");
    var fName = prompt("First Name");
    var lName = prompt("Last Name");
    document.getElementById("welcome").innerHTML = "Welcome, " + fName + " " + lName;
}

function picEnlarge(){ //Function to enlarge the image on click
    document.getElementById("headshot").style.transform = "scale(2)";
}

function picReset(){ //Function to reset the image on mouse move off
    document.getElementById("headshot").style.transform = "scale(1)";
}

function courseDD(){ /*Shows the drop down menu*/
    document.getElementById("courseDD").classList.toggle("show");
}

function itmDD(){ /*Shows the drop down menu*/
    document.getElementById("itmDD").classList.toggle("show");
}

function tmuDD(){ /*Shows the drop down menu*/
    document.getElementById("tmuDD").classList.toggle("show");
}

window.onclick = function(closeDD) { /*  Closes the drop downs on click off */
    if (!closeDD.target.matches('.DDButton')) {
    var dropdowns = document.getElementsByClassName("content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
   }
  }    
 }
}

function navHover(){
    document.getElementById("content").style.property = "font-size: 32px";
}

function navUnhover(){
    document.getElementById("content").style.property = "font-size: 20px";
}