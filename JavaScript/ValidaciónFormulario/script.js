const entrada = document.getElementById('nombre');
const button = document.getElementById('boton');

button.addEventListener('click', validarFormulario)

function validarFormulario() {
    if (entrada.value == "") {
        alert("El campo nombre no puede estar vacío")
    } 
}