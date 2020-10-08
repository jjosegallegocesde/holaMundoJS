//Referenciamos las etiquetas HTML a controlar:
let cajaNombre = document.getElementById("nombre");
let cajaApellido = document.getElementById("apellido");

let botonEnviar = document.getElementById("boton");

let ayuda1 = document.getElementById("ayuda1");

//Verificar el contenido de las cajas:
botonEnviar.addEventListener("click", validarFormulario);


//funcion para ejecutar al momento del envio de datos
function validarFormulario(evento) {
    evento.preventDefault();

    if (cajaNombre.value == "" && cajaApellido.value == "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.add("is-invalid");
        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value == "" && cajaApellido.value != "") {

        cajaNombre.classList.add("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        ayuda1.textContent = "Campo obligatorio";

    } else if (cajaNombre.value != "" && cajaApellido.value == "") {

        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.add("is-invalid");
        ayuda1.textContent = "";

    } else {
        cajaNombre.classList.remove("is-invalid");
        cajaApellido.classList.remove("is-invalid");
        ayuda1.textContent = "";
        //llamado al backend
    }





}