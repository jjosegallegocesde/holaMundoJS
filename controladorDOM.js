//Refereciar etiquetas de HTMl con el DOM
let tituloTarjeta2 = document.getElementById("titulo2");
let audioVariable = document.getElementById("audio1");
let botonPista1 = document.getElementById("boton1");
let botonPista2 = document.getElementById("boton2");

//Modificar el texto de una referencia
tituloTarjeta2.textContent = "banda coldplay";
console.log(audioVariable.textContent);



//DETECTAR que el usuario está haciendo clic en cada boton
botonPista1.addEventListener("click", activarPista1);
botonPista2.addEventListener("click", activarPista2);


//Modificar la fuente o el recurso que se carga en un tag de multimedia(audio,video,imagen)
function activarPista1() {
    audioVariable.src = "img/audio1.mp3";
}

function activarPista2() {
    audioVariable.src = "img/audio2.mp3";
}