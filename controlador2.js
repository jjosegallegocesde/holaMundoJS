//Entaradas del sistema:

let numeroContrato = "000-158";
let estratoEconomico = 2;

let valorCuentaServicios = 250000;

//Proceso:
/*if (estratoEconomico == "1") {

    console.log("Tenes un 40% de descuento");

} else if (estratoEconomico == "2") {

    console.log("Tenes un 30% de descuento");

} else if (estratoEconomico == "3") {
    console.log("Tenes un 20% de descuento");
} else {
    console.log("Usted no tiene ningún descuento");
}*/

//PROCESO SWITCH
switch (estratoEconomico) {

    case 1:
        console.log("Tenes un 40% de descuento");
        break;

    case 2:
        console.log("Tenes un 30% de descuento");
        break;

    case 3:
        console.log("Tenes un 20% de descuento");
        break;

    default:
        console.log("Usted no tiene ningún descuento");
        break;


}