class Grafo {
    constructor(numNodos) {
        this.nodos = numNodos;
        this.mAdyacencia = Array.from(Array(this.nodos), () => new Array(this.nodos).fill(0));
        this.vertices = ['a', 'b', 'c', 'd', 'e'];
    }

    creaArista(nodoInicio, nodoFinal) {
        this.mAdyacencia[nodoInicio][nodoFinal] = 1;
    }

    muestraMatrizAdyacencia() {
        console.log(" ", ...this.vertices);
        for (let f = 0; f < this.nodos; f++) {
            console.log(this.vertices[f], ...this.mAdyacencia[f]);
        }
    }
}

const main = () => {
    const tiempoInicio = Date.now();
    let grafo = null;
    let op;

    do {
        console.clear();
        console.log("Creacion de Grafo Lista Adyacencia");
        console.log("a) Creación del Grafo.");
        console.log("b) Añadir Aristas al Grafo.");
        console.log("c) Desplegar la Matriz de Adyacencia.");
        console.log("d) Salir del programa");
        console.log("\nIntroduzca el numero de la operacion: ");
        op = prompt();

        switch (op) {
            case 'a':
                console.clear();
                grafo = new Grafo(5);
                console.log("Grafo creado.");
                prompt();
                break;
            case 'b':
                console.clear();
                grafo.creaArista(0, 1);
                grafo.creaArista(0, 4);
                grafo.creaArista(1, 2);
                grafo.creaArista(1, 3);
                grafo.creaArista(2, 3);
                grafo.creaArista(3, 0);
                console.log("Aristas Creadas.");
                prompt();
                break;
            case 'c':
                console.clear();
                grafo.muestraMatrizAdyacencia();
                prompt();
                break;
            case 'd':
                const tiempoFinal = Date.now();
                const elapsedTime = (tiempoFinal - tiempoInicio);
                console.log("\n\nPrograma Finalizado.");
                console.log("\nTiempo de la ejecución del programa:", elapsedTime, "ms");
                prompt();
                break;
            default:
                console.clear();
                console.log("[ERROR] Opcion invalida - \nPress Enter to return to the menu");
                prompt();
                break;
        }
    } while (op !== 'd');
}

main();
