//Segundo uso de javaScript
function calcularEdad() {
    // Obtener la fecha de nacimiento del formulario
    const fechaNacimiento = document.getElementById("birthdate").value;

    // Calcular la edad
    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();

    // Ajustar la edad si aún no ha pasado el cumpleaños este año
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Asignar la edad al campo oculto
    document.getElementById("age").value = age;
}

var barraRango = document.getElementById('rango');
var spanValorRango = document.getElementById('valorRango');

// Agregar un evento de cambio a la barra de plazo
barraRango.addEventListener('input', function() {
    // Actualizar el contenido del span con el valor seleccionado
    spanValorRango.textContent = barraRango.value;
});