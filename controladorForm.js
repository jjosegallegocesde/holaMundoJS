//Referenciamos las etiquetas HTML a controlar:
let cajaNombre = document.getElementById("nombre");
let cajaApellido = document.getElementById("apellido");
let botonEnviar = document.getElementById("boton");

//Verificar el contenido de las cajas:
botonEnviar.addEventListener("click", validarFormulario);


//funcion para ejecutar al momento del envio de datos
function validarFormulario(evento) {
    evento.preventDefault();

    if (cajaNombre.value == "" && cajaApellido.value == "") {
        alert("Debes diligenciar los campos");

    }



}