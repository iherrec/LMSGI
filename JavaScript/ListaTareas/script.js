const listaTareas = document.getElementById("listatareas")
const input = document.getElementById("entrada")
const añadir = document.getElementById("añadir")

añadir.addEventListener("click", añadirTarea)

function añadirTarea() {

    const tarea = document.createElement("li");
    tarea.textContent = input.value;

    const completada = document.createElement("input")
    completada.type = "checkbox";
    listaTareas.appendChild(tarea);
    tarea.appendChild(completada);

    completada.addEventListener("click", cambiarClase);
    function cambiarClase() {
    this.parentElement.classList.toggle('miclase');
}

}





