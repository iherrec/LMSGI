const input = document.getElementById("tareaInput");
        const botonAgregar = document.getElementById("agregarBtn");
        const lista = document.getElementById("listaTareas");


        botonAgregar.addEventListener("click", agregarTarea);


        function agregarTarea() {
            const texto = input.value;
            const liTarea = document.createElement("li");
            liTarea.textContent = texto;

           // li.addEventListener("click", function () {
               // li.classList.toggle("completada");
         //   });


            const botonBorrar = document.createElement("button");
            botonBorrar.textContent = "X";


            botonBorrar.addEventListener("click", function borrar() {
                
                liTarea.remove();
            }); 


            liTarea.appendChild(botonBorrar);
            lista.appendChild(liTarea);
            // También se puede usar:
            // function borrar() {
            // this.parentElement.remove();}
        }