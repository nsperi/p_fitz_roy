document.addEventListener("DOMContentLoaded", function() {
    const formularioContacto = document.getElementById("contact-form");

    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        alert("Nombre: " + name + "\nCorreo Electrónico: " + email + "\nMensaje: " + message);
    });
});