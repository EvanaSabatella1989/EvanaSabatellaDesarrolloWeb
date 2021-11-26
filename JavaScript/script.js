// console.log("Esto es una linea de JavaScript")
// console.log(5+6)
// alert("Hola Evana") // mensajes del Navegador
// function mostrarMensaje(parametro){
//     parametro.preventDefault();
//     var mensaje = document.querySelector("#text").value;
//     document.querySelector("#copia").textContent = mensaje;
// }

// var formulario = document.querySelector("#formulario");
// formulario.addEventListener("input",mostrarMensaje);





// function mostrarMensaje(){

//     var mensaje = document.querySelector("#text").value;
//     var resultado = parseInt(mensaje)*mensaje
//     mensaje = mensaje + "X" + mensaje + "=" + resultado
//     document.querySelector("#copia").textContent = mensaje;

// }

// var formulario = document.querySelector("#formulario");
// formulario.addEventListener("input",mostrarMensaje);

function mostrarMensaje(parametro) {
    parametro.preventDefault();
    var uno = document.querySelector("#uno").value;
    var dos = document.querySelector("#dos").value;
    var resultado = parseFloat(uno)/parseFloat(dos);
    mensaje = uno + " / " + dos+" = "+resultado;
    document.querySelector("#mensaje").textContent = mensaje;    
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("input", mostrarMensaje);
