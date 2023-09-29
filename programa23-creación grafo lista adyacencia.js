class Grafo {
    constructor(vertice) {
        this.vertice = vertice;
        this.aristas = [];
    }

    crearAristas(gI, gF) {
        gI.aristas.push(gF);
    }

    muestraListaAdyacencia(gI, sangria = "") {
        console.log(sangria + gI.vertice);
        gI.aristas.forEach(g => {
            this.muestraListaAdyacencia(g, sangria + "\t");
        });
    }
}

const main = () => {
    const aGrafo = new Grafo('a');
    const bGrafo = new Grafo('b');
    const cGrafo = new Grafo('c');
    const dGrafo = new Grafo('d');
    let op;

    const startTime = new Date();

    do {
        console.clear();
        console.log("Creacion de Grafo Lista Adyacencia");
        console.log("a) Creacion de aristas");
        console.log("b) Despliegue de Lista de Adyacencia");
        console.log("c) Salir del programa");
        console.log("\nIntroduzca el numero de la operacion: ");
        op = prompt();

        switch (op) {
            case 'a':
                console.clear();
                aGrafo.crearAristas(aGrafo, cGrafo);
                aGrafo.crearAristas(aGrafo, bGrafo);
                bGrafo.crearAristas(bGrafo, cGrafo);
                bGrafo.crearAristas(bGrafo, dGrafo);
                cGrafo.crearAristas(cGrafo, dGrafo);
                console.log("Aristas creadas.");
                prompt();
                break;
            case 'b':
                console.clear();
                aGrafo.muestraListaAdyacencia(aGrafo);
                prompt();
                break;
            case 'c':
                const endTime = new Date();
                const elapsedTime = (endTime - startTime);
                console.log("\n\nPrograma Finalizado.");
                console.log("\nTiempo de la ejecucion del programa: " + elapsedTime + " milisegundos");
                console.log("\nPresione cualquier tecla para salir del programa...");
                prompt();
                break;
            default:
                console.clear();
                console.log("[ERROR] Opcion invalida - \nPress Enter to return to the menu");
                prompt();
                break;
        }
    } while (op !== 'c');
}

main();
