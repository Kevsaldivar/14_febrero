// Definir constantes para selectores
const resultadoElement = document.getElementById("resultado");
const binicioContainer = document.querySelector(".Contenedor-Binicio");
const con2Container = document.querySelector(".Con-2");

// Agregar evento de clic al botón "BVer"
document.getElementById("BVer").addEventListener('click', function() {
    resultadoElement.style.display = "block";
});

// Agregar evento de clic al botón "BotonCerrar"
document.getElementById("BotonCerrar").addEventListener('click', function() {
    resultadoElement.style.display = "none";
    binicioContainer.style.display = "none";
    con2Container.style.display = "block";
});

