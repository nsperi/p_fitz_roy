export function projects() {
    function Proyecto(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    function agregarProyecto() {

    }

    function mostrarFormulario() {

    }

    function mostrarProyectos() {

    }

    document.getElementById("mostrarFormulario").addEventListener("click", mostrarFormulario);
    document.getElementById("agregarProyecto").addEventListener("click", agregarProyecto);

    mostrarProyectos();
}
