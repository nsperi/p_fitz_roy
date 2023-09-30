document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const totalBudgetSpan = document.getElementById("totalBudget");

    if (calculateButton && totalBudgetSpan) {
        calculateButton.addEventListener("click", () => {
            const materialsCost = parseFloat(document.getElementById("materialsCost").value);
            const laborCost = parseFloat(document.getElementById("laborCost").value);
            const otherCosts = parseFloat(document.getElementById("otherCosts").value);

            if (isNaN(materialsCost) || isNaN(laborCost) || isNaN(otherCosts)) {
                swal({
                    title: "ERROR",
                    text: "Por favor, ingrese valores numéricos válidos para los costos.",
                    icon: "error",
                    button: "Volver a intentar"
                } );
            } else {
                const totalBudget = materialsCost + laborCost + otherCosts;
                totalBudgetSpan.textContent = totalBudget.toFixed(2);
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const totalBudgetSpan = document.getElementById("totalBudget");

    if (calculateButton && totalBudgetSpan) {
        calculateButton.addEventListener("click", () => {
            const materialsCost = parseFloat(document.getElementById("materialsCost").value);
            const laborCost = parseFloat(document.getElementById("laborCost").value);
            const otherCosts = parseFloat(document.getElementById("otherCosts").value);

            if (isNaN(materialsCost) || isNaN(laborCost) || isNaN(otherCosts)) {
                swal({
                    title: "ERROR",
                    text: "Por favor, ingrese valores numéricos válidos para los costos.",
                    icon: "error",
                    button: "Volver a intentar"
                } );
            } else {
                const totalBudget = materialsCost + laborCost + otherCosts;
                totalBudgetSpan.textContent = totalBudget.toFixed(2);
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const formularioContacto = document.getElementById("contact-form");

    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        swal({
            title: "Hola " + name + "!",
            text: "Tu mensaje ha sido enviado correctamente. Nos contactaremos contigo a la brevedad",
            icon: "success",
            button: "👍"
        })
    });
});





function Proyecto(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
}


function agregarProyecto() {
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;

    if (nombre && descripcion && imagen) {
        const proyecto = new Proyecto(nombre, descripcion, imagen);

        const proyectosExistentes = JSON.parse(localStorage.getItem("proyectos")) || [];

        proyectosExistentes.push(proyecto);

        localStorage.setItem("proyectos", JSON.stringify(proyectosExistentes));

        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("imagen").value = "";

        mostrarProyectos();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function mostrarFormulario() {
    document.querySelector(".form-projects").style.display = "block";
}

function mostrarProyectos() {
    const listaProyectos = document.querySelector(".listaProyectos");
    listaProyectos.innerHTML = "";

    const proyectosExistentes = JSON.parse(localStorage.getItem("proyectos")) || [];

    proyectosExistentes.forEach((proyecto, index) => {
        const tarjetaProyecto = document.createElement("div");
        tarjetaProyecto.classList.add("tarjeta-proyecto");

        const titulo = document.createElement("h2");
        titulo.textContent = proyecto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = proyecto.descripcion;

        const imagen = document.createElement("img");
        imagen.src = proyecto.imagen;
        imagen.alt = proyecto.nombre;

        tarjetaProyecto.appendChild(titulo);
        tarjetaProyecto.appendChild(descripcion);
        tarjetaProyecto.appendChild(imagen);

        listaProyectos.appendChild(tarjetaProyecto);
    });
}

document.getElementById("mostrarFormulario").addEventListener("click", mostrarFormulario);
document.getElementById("agregarProyecto").addEventListener("click", agregarProyecto);

mostrarProyectos();


document.addEventListener("DOMContentLoaded", function() {
    const jsonFile = './proyectos.json';

    fetch(jsonFile)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }
        return response.json();
    })
    .then(data => {

        const listaProyectos = document.querySelector(".listaProyectos");
        listaProyectos.innerHTML = "";

        data.forEach((proyecto, index) => {
            const tarjetaProyecto = document.createElement("div");
            tarjetaProyecto.classList.add("tarjeta-proyecto");

            const titulo = document.createElement("h2");
            titulo.textContent = proyecto.nombre;

            const descripcion = document.createElement("p");
            descripcion.textContent = proyecto.descripcion;

            const imagen = document.createElement("img");
            imagen.src = proyecto.imagen;
            imagen.alt = proyecto.nombre;

            tarjetaProyecto.appendChild(titulo);
            tarjetaProyecto.appendChild(descripcion);
            tarjetaProyecto.appendChild(imagen);

            listaProyectos.appendChild(tarjetaProyecto);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
});
