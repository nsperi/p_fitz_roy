export function contactForm() {
    const formularioContacto = document.getElementById("contact-form");

    formularioContacto.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        swal({
            title: "Hola " + name + "!",
            text: "Tu mensaje ha sido enviado correctamente. Nos contactaremos contigo a la brevedad",
            icon: "success",
            button: "👍"
        });
    });
}