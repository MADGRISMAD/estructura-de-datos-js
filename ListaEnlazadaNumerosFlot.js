const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Nodo {
    constructor(e, s) {
        this.elemento = e;
        this.siguiente = s;
    }
}

class ListaEnlazada {
    constructor(capacidad) {
        this.Max = capacidad;
        this.inicio = -1;
        this.disponible = 0;
        this.tamanio = 0;
        this.listanumeros = new Array(capacidad).fill(null).map((_, index) => 
            index !== capacidad - 1 ? new Nodo(0, index + 1) : new Nodo(0, -1));
    }

    insertar(dato) {
        // ... (similar a tu implementación en C#)
    }

    // ... (resto de los métodos, convertidos de manera similar)

    destruir() {
        console.log("Memoria de Lista liberada con éxito");
    }
}

const main = () => {
    const menu = () => {
        console.clear();
        console.log("\n    LISTA Números Flotantes");
        console.log("\na) Crear la lista");
        console.log("b) Insertar un Elemento en la lista");
        // ... (resto de las opciones)
        console.log("g) Salir del Programa");
        console.log("\nSeleccione una opción: ");
    };

    let list = null;

    const loop = () => {
        menu();
        rl.question('', (opcion) => {
            switch (opcion) {
                case 'a':
                    // Crear la lista
                    // ...
                    loop();
                    break;
                case 'b':
                    // Insertar un elemento
                    // ...
                    loop();
                    break;
                // ... (resto de las opciones)
                case 'g':
                    console.log('Saliendo del programa.');
                    rl.close();
                    break;
                default:
                    console.log('Opción no válida.');
                    loop();
                    break;
            }
        });
    };

    loop();
};

main();
