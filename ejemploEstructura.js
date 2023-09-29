//---- Creamos el struct y agregamos un nombre para identificarlo.
class EDDMPersonas {
    constructor() {
        this.nombre = "";
        this.inicial = "";
        this.edad = 0;
    }
}

//---- Creamos nuestro Main para realizar la Array.
function main() {
    var personas = new Array(10);
    for (var i = 0; i < personas.length; i++) {
        personas[i] = new EDDMPersonas();
    }

    //---------- Persona 1

    personas[0].nombre = "Juan";
    personas[0].inicial = "J";
    personas[0].edad = 20;

    console.log("La edad de " + personas[0].nombre + " es " + personas[0].edad + " y su inicial es " + personas[0].inicial + ". ");

    //---------- Persona 2

    personas[1].nombre = "Pedro";
    personas[1].inicial = "P";
    personas[1].edad = 26;

    console.log("\nLa edad de " + personas[1].nombre + " es " + personas[1].edad + " y su inicial es " + personas[1].inicial + ". ");

    //---------- Persona 3

    personas[2].nombre = "Ignacio";
    personas[2].inicial = "I";
    personas[2].edad = 34;

    console.log("\nLa edad de " + personas[2].nombre + " es " + personas[2].edad + " y su inicial es " + personas[2].inicial + ". ");

    //---------- Readkey

    console.log("\n\nPulse ENTER para salir del programa. ");
}
main();