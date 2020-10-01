//VARIABLES DE ENTRADA
let nombreCliente = "juan";
let telefonoCliente = "3225962363";
let idCliente = "1017170603";
let direccionCliente = "calle 100#20-a sur 54";

let productoSeleccionado = "Torta de chocolate";
let tiendaSeleccionada = "Tortas DELI SA";
let cantidad = 1;
let precioProducto = 40000;

const COSTOENVIO = 8500;
let tieneDescuento = false;
const DESCUENTO = 0.1;


//Condicional(IF)
if (precioProducto > 35000) {

    //calcular el total

    let total = cantidad * precioProducto;
    let totalconDescuento = total * DESCUENTO;
    let totalNeto = total - totalconDescuento + COSTOENVIO;

    console.log(`señor usuario ${nombreCliente} el costo total de su compra es de: ${totalNeto}`);


} else {

    let total = (cantidad * precioProducto) + COSTOENVIO;
    console.log(`señor usuario ${nombreCliente} el costo total de su compra es de: ${total}`);

}