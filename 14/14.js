let Titulo = document.title;

window.addEventListener('blur', () => {
    Titulo = document.title;
    document.title = "No te vayas, regresa";
});

window.addEventListener('focus', () => {
    document.title = Titulo;
});

let h1 = document.getElementById("Titulo");
let Boton12 = document.getElementById("B12");
let ImagenFlor = document.getElementById("ImagenFlor");

Boton12.addEventListener('click', function () {
    // Ocultar la imagen al hacer clic en "12 Flores"
    ImagenFlor.style.display = "none";

    // Ocultar el elemento que contiene las letras (h1) y el botón B12
    h1.style.display = "none";
    Boton12.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia al botón con el id "B12"
    var botonB12 = document.getElementById("B12");

    // Agregar event listener para el clic en el botón
    botonB12.addEventListener("click", function () {
        // Obtener referencia al contenedor del corazón
        var heartContainer = document.querySelector(".heart-container");

        // Agregar clase "active" para iniciar la animación
        heartContainer.classList.add("active");
    });
});


