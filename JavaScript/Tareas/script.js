const listatareas = document.getElementById('listatareas');
const buttonAgregar = document.getElementById('agregar');
const entrada = document.getElementById('entrada');
const buttonBorrar = document.getElementById ('borrar');
const ptarea = document.createElement("p");
const imagen = document.createElement("img");
const buttonCambiarColor = document.getElementById('cambiarcolor');

buttonCambiarColor.addEventListener('click', colorrojo);

function colorrojo(){
    const listatareasli = document.querySelectorAll("li");
    for (let i=0; i<listatareasli.length; i++){
        listatareasli[i].style.color="red";
    }
}
buttonAgregar.addEventListener('click', agregar);
/* buttonBorrar.addEventListener('click', borrar); */


function agregar (){
    const litarea = document.createElement("li");
    const node = document.createTextNode(entrada.value);
    /*ptarea.appendChild(node);*/
    litarea.appendChild(node);
    listatareas.appendChild(litarea);
    /*
    const enlace = document.createElement("a");
    const node2 = document.createTextNode("Enlace a...");
    
    tareas.appendChild(imagen);
    imagen.setAttribute("src", "https://th.bing.com/th/id/R.053f10ae0b0f56b70482b3f77482e405?rik=Ew2KZaoA6E2g0g&riu=http%3a%2f%2festaticos.sport.es%2fresources%2fjpg%2f0%2f7%2f1492981093370.jpg&ehk=YqHaQDNvNk262bigTQ2z8SRBQnUfSaSGDJeb1cxgQhU%3d&risl=&pid=ImgRaw&r=0");
    enlace.appendChild(node2);
    enlace.setAttribute("href", "https://www.ieszaidinvergeles.org")
    ptarea.appendChild(enlace); */ 
}

/*function borrar () {
    imagen.remove();
    ptarea.remove();
}
    */