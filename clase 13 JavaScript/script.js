function mostrarMensaje(event){
    event.preventDefault();

    // var mensaje = document.getElementById("textoIngresado").value;
    var mensaje = parseInt(document.getElementById("textoIngresado").value);
    

    if (mensaje > 0){
        textoMostrado = "Es mayor a cero";
    }

    document.querySelector("#mensaje").textContent = textoMostrado;
}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit",mostrarMensaje);