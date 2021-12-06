function mostrarNombreCompleto(){
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nombreCompleto = nombre + "," + apellido;
    document.querySelector("h1").textContent = nombreCompleto;
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("input",mostrarNombreCompleto);