function Proyecto(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
}

const proyecto1 = new Proyecto("Proyecto 1", "En el año 2010 Fitz Roy Construcciones inicia la construcción de viviendas con sistema Royal House llave en mano, tales como la ubicada en Patagonia 271, Caleta Olivia.", "../images/imagen12.jpg");
const proyecto2 = new Proyecto("Proyecto 2", "En el año 2011, construye oficina para Distrigas S.A. en Jaramillo, localidad al sur de nuestro establecimiento comercial.", "../images/imagen13.jpg");
const proyecto3 = new Proyecto("Proyecto 3", "En el año 2012, reparación general de las instalaciones eléctricas conforme la normativa vigente del edificio Ledesma de 25 unidades funcionales.", "../images/imagen14.jpg");
const proyecto4 = new Proyecto("Proyecto 4", "En el año 2014, fabricación de trailers con ejes montantes y lanza de giro, trabajos de soldaduras generales, preparación y montaje de tinglados en la zona industrial de Caleta Olivia.", "../images/imagen15.jpg");
const proyecto5 = new Proyecto("Proyecto 5", "Año 2017/2019 se construyeron 4 duplex en el barrio Vista Hermosa.", "../images/imagen16.jpg");

const proyectos = [proyecto1, proyecto2, proyecto3, proyecto4, proyecto5];

const listaProyectos = document.getElementById("lista-proyectos");

const proyectosTransformados = proyectos.map((proyecto) => {
    return {
        nombre: proyecto.nombre,
        descripcion: proyecto.descripcion,
        imagen: proyecto.imagen,
    };
});

proyectosTransformados.forEach((proyectoTransformado) => {
    const proyectoDiv = document.createElement("div");
    proyectoDiv.classList.add("proyecto");

    const nombre = document.createElement("h2");
    nombre.textContent = proyectoTransformado.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = proyectoTransformado.descripcion;

    const imagen = document.createElement("img");
    imagen.src = proyectoTransformado.imagen;
    imagen.alt = proyectoTransformado.nombre;

    proyectoDiv.appendChild(nombre);
    proyectoDiv.appendChild(descripcion);
    proyectoDiv.appendChild(imagen);

    listaProyectos.appendChild(proyectoDiv);
});



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