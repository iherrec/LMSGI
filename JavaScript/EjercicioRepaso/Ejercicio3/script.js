const inputTitulo = document.getElementById("titulo");
const inputAutor = document.getElementById("autor")
const inputPortada = document.getElementById("portada")
const boton = document.getElementById("boton");
const contenedor = document.getElementById("tarjeta")

boton.addEventListener("click", añadir)

function añadir(){
    let portada.textContent = inputPortada.value
    let imagen = document.createElement("img")
    imagen.setAttribute("src", "portada")
    contenedor.appendChild(imagen)
}