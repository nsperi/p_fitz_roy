const nombresProyectos = ["proyecto 1", "proyecto 2", "proyecto 3", "proyecto 4", "proyecto 5"];
const descripcionesProyectos = [
    "En el año 2010 Fitz Roy Construcciones inicia la construcción de viviendas con sistema Royal House llave en mano, tales como la ubicada en Patagonia 271, Caleta Olivia. ",
    "En el año 2011, construye oficina para Distrigas S.A. en Jaramillo, localidad al sur de nuestro establecimiento comercial.",
    "En el año 2012, reparación general de las instalaciones eléctricas conforme la normativa vigente del edificio Ledesma de 25 unidades funcionales.",
    "En el año 2014, fabricación de trailers con ejes montantes y lanza de giro, trabajos de soldaduras generales, preparación y montaje de tinglados en la zona industrial de Caleta Olivia.",
    "En el 2021 Casa Cerro Heim 100."
];

const listaProyectos = document.getElementById("lista-proyectos");

for (let i = 0; i < nombresProyectos.length; i++) {
    const proyectoDiv = document.createElement("div");
    proyectoDiv.classList.add("proyecto");

    const nombre = document.createElement("h2");
    nombre.textContent = nombresProyectos[i];

    const descripcion = document.createElement("p");
    descripcion.textContent = descripcionesProyectos[i];

    proyectoDiv.appendChild(nombre);
    proyectoDiv.appendChild(descripcion);

    listaProyectos.appendChild(proyectoDiv);
}



function procesarFormularioContacto() {
    const message = document.getElementById("message").value;
    if (message.length > 150) {
        alert("El mensaje no debe tener más de 150 caracteres.");
    } else {
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    }
}

const calculateButton = document.getElementById("calculateButton");
const totalBudgetSpan = document.getElementById("totalBudget");

calculateButton.addEventListener("click", () => {
    const materialsCost = parseFloat(document.getElementById("materialsCost").value);
    const laborCost = parseFloat(document.getElementById("laborCost").value);
    const otherCosts = parseFloat(document.getElementById("otherCosts").value);

    if (isNaN(materialsCost) || isNaN(laborCost) || isNaN(otherCosts)) {
        alert("Por favor, ingrese valores numéricos válidos para los costos.");
    } else {
        const totalBudget = materialsCost + laborCost + otherCosts;
        totalBudgetSpan.textContent = totalBudget.toFixed(2);
    }
});

