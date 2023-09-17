export function projects() {
    function Proyecto(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    function agregarProyecto() {
        // ... (tu función agregarProyecto aquí)
    }

    function mostrarFormulario() {
        // ... (tu función mostrarFormulario aquí)
    }

    function mostrarProyectos() {
        // ... (tu función mostrarProyectos aquí)
    }

    document.getElementById("mostrarFormulario").addEventListener("click", mostrarFormulario);
    document.getElementById("agregarProyecto").addEventListener("click", agregarProyecto);

    mostrarProyectos();
}
