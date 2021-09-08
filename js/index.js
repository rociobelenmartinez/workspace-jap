//function that saves data 
function saveData() {
    localStorage.setItem("username", document.getElementById("nombre").value)
}

//function that validate the info for the login
function validar(){
    let nombre = document.getElementById("nombre").value;
    let contrasena = document.getElementById("contrasena").value;
    if((nombre !=="")&& (contrasena !== "")){
        saveData() 
        window.location.href = "menu.html"
    }
    else
    {
        alert("Debe completar los campos.")
    }
}
