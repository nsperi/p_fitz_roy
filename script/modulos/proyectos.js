// proyecto.js

// Definir la estructura del objeto Proyecto
function Proyecto(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
}

// Función para agregar un proyecto
export function agregarProyecto() {
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;

    if (nombre && descripcion && imagen) {
        // Crear un objeto de proyecto
        const proyecto = new Proyecto(nombre, descripcion, imagen);

        // Obtener proyectos existentes del almacenamiento local
        const proyectosExistentes = JSON.parse(localStorage.getItem("proyectos")) || [];

        // Agregar el nuevo proyecto a la lista de proyectos
        proyectosExistentes.push(proyecto);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem("proyectos", JSON.stringify(proyectosExistentes));

        // Limpiar el formulario
        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("imagen").value = "";

        // Actualizar la visualización de los proyectos
        mostrarProyectos();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Función para mostrar el formulario de nuevo proyecto
export function mostrarFormulario() {
    document.querySelector(".form-projects").style.display = "block";
}

// Función para mostrar los proyectos almacenados
export function mostrarProyectos() {
    const listaProyectos = document.querySelector(".listaProyectos");
    listaProyectos.innerHTML = "";

    const proyectosExistentes = JSON.parse(localStorage.getItem("proyectos")) || [];

    proyectosExistentes.forEach((proyecto, index) => {
        // Crear una tarjeta para cada proyecto
        const tarjetaProyecto = document.createElement("div");
        tarjetaProyecto.classList.add("tarjeta-proyecto");

        // Agregar contenido a la tarjeta
        const titulo = document.createElement("h2");
        titulo.textContent = proyecto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = proyecto.descripcion;

        const imagen = document.createElement("img");
        imagen.src = proyecto.imagen;
        imagen.alt = proyecto.nombre;

        // Agregar elementos a la tarjeta
        tarjetaProyecto.appendChild(titulo);
        tarjetaProyecto.appendChild(descripcion);
        tarjetaProyecto.appendChild(imagen);

        // Agregar la tarjeta a la lista de proyectos
        listaProyectos.appendChild(tarjetaProyecto);
    });
}
