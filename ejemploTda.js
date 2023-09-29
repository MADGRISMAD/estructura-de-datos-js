// ---- Crear la variable para nuestra pila.
let pila;

// ---- Creamos el Stack con el nombre que queremos designar para los stack/datos de nuestro cola/pila.
let datos = [];

// ---- Creamos la Sintaxis para crear cada uno de nuestros Stack/Datos del cola/pila.
datos.push("[1] Manzana ");
datos.push("[2] Naranja ");
datos.push("[3] Papaya ");
datos.push("[4] Melon ");
datos.push("[5] Sandia ");
datos.push("[6] Platano ");
datos.push("[7] Limon ");
datos.push("[8] Piña ");
datos.push("[9] Pera ");
datos.push("[10] Uva ");

// ----- Se realiza el For para repetir la Pila con la cantidad de Datos en la lista deseada.
for (let i = 0; i < 10; i++) {
    pila = datos.pop();
    console.log(pila);
}