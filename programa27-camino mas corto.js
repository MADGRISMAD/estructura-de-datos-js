class Grafo {

    static makeSomeGarbage() {
        let versions = [];
        for (let i = 0; i < Grafo.maxGarbage; i++) {
            versions.push(new Date().getMilliseconds());
        }
    }

    static main() {
        let start = performance.now();
        let op = '';

        do {
            console.clear();
            console.log("Bienvenido al menu, por favor seleccione una de las siguientes opciones..");
            console.log("a) Añadir aristas al Grafo.");
            console.log("b) Despliegue de Matriz de Adyacencia.");
            console.log("c) Crear y Desplegar Tabla Distancia entre Nodos.");
            console.log("d) Calcular la ruta de camino mas corto.");
            console.log("e) Salir Del Programa.");
            op = prompt("Ingrese la opcion a ejecutar: ");

            switch (op) {
                case 'a':
                    console.clear();
                    console.log("\n\nPresiona Enter para volver al menu");
                    break;
                case 'b':
                    console.clear();
                    console.log("\n\nPresiona Enter para volver al menu");
                    break;
                case 'c':
                    console.clear();
                    console.log("\n\nPresiona Enter para volver al menu");
                    break;
                case 'd':
                    console.clear();
                    console.log("\n\nPresiona Enter para volver al menu");
                    break;
                case 'e':
                    console.clear();
                    console.log("Gracias por usar el programa.");
                    let end = performance.now();
                    let duration = end - start;
                    console.log(`Tiempo del uso del programa: ${duration} ms`);

                    Grafo.makeSomeGarbage();

                    // Memory logging is quite different in JavaScript. You can use browser APIs for more detailed stats.
                    console.log(`Memoria usada: ${performance.memory.usedJSHeapSize} bytes`);
                    break;
                default:
                    console.clear();
                    console.log("La opcion que eligio no es correcta, por favor intente de nuevo.");
                    console.log("Presiona ENTER para volver al menu.");
                    break;
            }
        } while (op !== 'e');
    }
}

Grafo.maxGarbage = 1000;

Grafo.main();
