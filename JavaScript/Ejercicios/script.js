const botonCambiarTexto = document.getElementById('cambiarTexto');
const pTexto = document.getElementById("texto")

const botonCambiarEstilo = document.getElementById("cambiarEstilo")
const contenedor = document.getElementById("contenedor")

const botonOcultar = document.getElementById('ocultar')


botonCambiarEstilo.addEventListener('click', cambiarEstilo)
botonCambiarTexto.addEventListener('click', cambiarTexto)
botonOcultar.addEventListener('click', ocultar)

function cambiarTexto() {
    pTexto.textContent = "El texto ha cambiado"
}

function cambiarEstilo(){
    contenedor.style.width = "30%"
    contenedor.style.color = "blue";
    contenedor.style.display = "flex"
    contenedor.style.flexDirection = "column"
}

function ocultar() {
  if (contenedor.style.display != "none") {
    contenedor.style.display = "none"
  } else if (contenedor.style.display === "none"){
    contenedor.style.display = "block"
  }
}