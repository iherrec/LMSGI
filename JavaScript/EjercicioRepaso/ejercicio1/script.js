const lista = document.getElementById("lista");
const botonAgregar = document.getElementById("agregar")
const botonBorrar = document.getElementById("borrar")
let i = 3;
botonAgregar.addEventListener('click', agregar);



function agregar(){
    i++;
    const elemento = document.createElement('li')
    lista.appendChild(elemento);
    elemento.textContent = "Elemento " + i;
    elemento.addEventListener('click', borrar)

    function borrar(){
        i--;
        elemento.remove();
    }

    
}




