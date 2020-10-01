//Refereciar etiquetas de HTMl con el DOM
let tituloTarjeta2 = document.getElementById("titulo2");
let audioVariable = document.getElementById("audio1");
let botonPista1 = document.getElementById("boton1");
let botonPista2 = document.getElementById("boton2");

//Modificar el texto de una referencia
tituloTarjeta2.textContent = "banda coldplay";
console.log(audioVariable.textContent);

//Modificar la fuente o el recurso que se carga en un tag de multimedia(audio,video,imagen)
audioVariable.src = "img/audio2.mp3";