/* ejercicio 1 */

// 'elemento' recibe el valor de 'this' desde el HTML
function resaltar(elemento) {
    // Cambia el color de fondo del input actual
    elemento.style.backgroundColor = "#a200ff";
}

function normal(elemento) {
    // Restaura el color original cuando el usuario sale del input
    elemento.style.backgroundColor = "white";
}

/* ejercicio 2 */

function validarFormulario(formulario) {
    // Accedemos al valor del input cuyo name es "correo"
    let correo = formulario.correo.value;

    if (correo === "") {
        document.getElementById("mensaje").textContent = "El correo no puede estar vacío";
        document.getElementById("mensaje").style.color = "red";
        return false; // Evita que el formulario se envíe
    }

    document.getElementById("mensaje").textContent = "Formulario enviado correctamente";
    document.getElementById("mensaje").style.color = "green";
    return true;
}

/* ejercicio 3 */

// Cambia el borde del input clickeado usando this
function cambiarBorde(elemento) {
    // 'elemento' es el input que recibió el click
    elemento.style.border = "2px solid blue";
}

// Valida y limpia el formulario
function validarDesafio(formulario) {
    // Acceso directo a inputs por su atributo 'name'
    let nombre = formulario.nombre.value;
    let edad = formulario.edad.value;
    let mensaje = document.getElementById("mensajeDesafio");

    if (nombre === "" || edad === "") {
        mensaje.textContent = "Error: Todos los campos son obligatorios.";
        mensaje.style.color = "red";
        return false;
    } else {
        mensaje.textContent = "¡Éxito! Registro completado.";
        mensaje.style.color = "green";

        // El gran truco: this.reset() limpia todos los campos del form
        formulario.reset();

        return false; // Retornamos false solo para ver el mensaje en pantalla
    }
}