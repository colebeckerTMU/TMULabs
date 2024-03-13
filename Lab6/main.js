function submitHandler(){ //Store form locally
    var form = document.getElementById("labForm");
    localStorage.setItem("labForm", form.value);
}