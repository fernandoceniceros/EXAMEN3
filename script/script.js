// Archivo: script.js
// Descripción: Funciones de interacción para las páginas del examen III
// Autor: Fernando Ceniceros Quiñones
// Fecha: 20 de noviembre de 2024

// Función para cambiar los colores de fondo y texto con teclas 1-5
document.addEventListener("keydown", (event) => {
    const key = event.key;
    switch (key) {
        case "1":
            document.body.style.backgroundColor = "#FFC0CB";  // Rosa
            document.body.style.color = "#000000";  // Texto negro
            break;
        case "2":
            document.body.style.backgroundColor = "#ADD8E6";  // Azul claro
            document.body.style.color = "#000000";  // Texto negro
            break;
        case "3":
            document.body.style.backgroundColor = "#90EE90";  // Verde claro
            document.body.style.color = "#000000";  // Texto negro
            break;
        case "4":
            document.body.style.backgroundColor = "#FFD700";  // Amarillo
            document.body.style.color = "#000000";  // Texto negro
            break;
        case "5":
            document.body.style.backgroundColor = "#FF4500";  // Naranja
            document.body.style.color = "#FFFFFF";  // Texto blanco
            break;
    }
    console.log(`Tecla presionada: ${key}`);
});

// Función para detectar las teclas presionadas
document.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});

// Funciones para los botones de la página 4
if (document.title === "Inciso 4") {
    const textArea = document.getElementById("text-area");

    // Cambiar texto al presionar el botón "Adelante"
    document.getElementById("btn-forward").addEventListener("click", () => {
        textArea.textContent = "Texto cambiado hacia adelante.";
    });

    // Cambiar texto al presionar el botón "Atrás"
    document.getElementById("btn-backward").addEventListener("click", () => {
        textArea.textContent = "Texto cambiado hacia atrás.";
    });

    // Cambiar texto al presionar la tecla de flecha derecha o izquierda
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            textArea.textContent = "Texto cambiado con la flecha adelante.";
        } else if (event.key === "ArrowLeft") {
            textArea.textContent = "Texto cambiado con la flecha atrás.";
        }
    });
}
