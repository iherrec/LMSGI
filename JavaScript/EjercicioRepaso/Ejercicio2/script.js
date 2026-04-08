let contador = document.getElementById("contador")
const botonSumar = document.getElementById("sumar")
const botonRestar = document.getElementById("restar")
const botonReset = document.getElementById("reset")
let valor = localStorage.getItem("valor"); // Para almacenar el valor de la variable y que al volver a cargar la página sea el mismo valor 
contador.textContent = valor; // Para que cuando cargue la página, el número se refleje desde principio

botonSumar.addEventListener ('click', function() {
    valor++
    contador.textContent = valor;
    localStorage.setItem("valor", valor)
})

botonRestar.addEventListener ('click', function(){
    valor--;
    contador.textContent = valor;
    localStorage.setItem("valor", valor)


})

botonReset.addEventListener ('click', function(){
    valor = 0;
    contador.textContent = valor;
    localStorage.setItem("valor", valor)


})