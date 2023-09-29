class Grafo {
    constructor(nodos) {
        this.nodos = nodos;
        this.mAdyacencia = Array.from(Array(this.nodos), () => new Array(this.nodos).fill(0));
        this.vertices = ['A', 'B', 'C', 'D', 'E'];
    }

    añadirPeso(nodoInicio, nodoFinal, peso) {
        this.mAdyacencia[nodoInicio][nodoFinal] = peso;
    }

    muestraMatrizAdyacencia() {
        console.log("\t*", ...this.vertices);
        for (let f = 0; f < this.nodos; f++) {
            console.log("*" + this.vertices[f] + "* ", ...this.mAdyacencia[f]);
        }
    }
}

const main = () => {
    const tiempoInicio = Date.now();
    let migrafo = null;
    let op = 'x';

    do {
        console.clear();
        console.log("\n\tMENÚ GRAFO PONDERADO");
        console.log("\na) Creación del Grafo.");
        console.log("b) Añadir Peso a las Aristas.");
        console.log("c) Despliegue Matriz de Adyacencia con Pesos.");
        console.log("d) Salir del Programa.");
        op = prompt("Ingrese una opción: ");

        switch (op) {
            case 'a':
                migrafo = new Grafo(5);
                console.log("\nCreando grafo. . .");
                alert("Grafo creado.");
                break;
            case 'b':
                migrafo.añadirPeso(0, 1, 12);
                migrafo.añadirPeso(0, 3, 87);
                migrafo.añadirPeso(1, 4, 11);
                migrafo.añadirPeso(2, 0, 19);
                migrafo.añadirPeso(3, 1, 23);
                migrafo.añadirPeso(3, 2, 10);
                migrafo.añadirPeso(4, 3, 43);
                alert("Aristas creadas.");
                break;
            case 'c':
                migrafo.muestraMatrizAdyacencia();
                alert("Matriz de Adyacencia mostrada.");
                break;
            case 'd':
                const tiempoFinal = Date.now();
                const elapsedTime = tiempoFinal - tiempoInicio;
                console.log("\nSaliendo. . .");
                console.log(`\nTiempo de ejecución: ${elapsedTime} ms`);
                alert("Saliendo...");
                break;
            default:
                console.log("\nOpción no válida. Por favor, inténtelo de nuevo.");
                break;
        }
    } while (op !== 'd');
}

main();
