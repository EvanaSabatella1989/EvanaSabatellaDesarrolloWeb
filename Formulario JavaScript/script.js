function mostrarNombreCompleto(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nombreCompleto = apellido + "," + nombre;
    document.querySelector("h2").textContent = nombreCompleto;
}



var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarNombreCompleto);