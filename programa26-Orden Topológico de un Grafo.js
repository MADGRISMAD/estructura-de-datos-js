class Grafo {
    constructor(nodos) {
        this.nodos = nodos;
        this.mAdyacencia = Array.from(Array(this.nodos), () => new Array(this.nodos).fill(0));
        this.indegree = new Array(this.nodos).fill(0);
        this.vertices = ['0', '1', '2', '3', '4', '5', '6'];
    }

    crearArista(nodoInicio, nodoFinal) {
        this.mAdyacencia[nodoInicio][nodoFinal] = 1;
    }

    muestraMatrizAdyacencia() {
        console.log("\t", ...this.vertices);
        this.mAdyacencia.forEach((row, idx) => {
            console.log(this.vertices[idx], ...row);
        });
    }

    calcularIndegree() {
        this.indegree.fill(0);
        for (let i = 0; i < this.nodos; i++) {
            for (let j = 0; j < this.nodos; j++) {
                if (this.mAdyacencia[j][i] === 1) {
                    this.indegree[i]++;
                }
            }
        }
    }

    muestraIndegree() {
        this.indegree.forEach((value, idx) => {
            console.log(`Nodo: ${this.vertices[idx]}, ${value}`);
        });
    }

    encuentraIndegree() {
        const index = this.indegree.findIndex(value => value === 0);
        return index === -1 ? -1 : this.vertices[index];
    }

    decrementaIndegree(nodo) {
        const index = this.vertices.indexOf(nodo);
        if (index !== -1) {
            this.indegree[index] = -1;
            for (let j = 0; j < this.nodos; j++) {
                if (this.mAdyacencia[index][j] === 1) {
                    this.indegree[j]--;
                }
            }
        }
    }

    ordenamientoTopologico() {
        let nodo = '';
        do {
            nodo = this.encuentraIndegree();
            if (nodo !== -1) {
                console.log(`${nodo} -->`);
                this.decrementaIndegree(nodo);
            }
        } while (nodo !== -1);
    }
}

// Main function
const main = () => {
    let gf = null;
    let op = '';
    do {
        console.log("Bienvenido al menu:");
        console.log("a) Añadir Aristas al Grafo.");
        console.log("b) Desplegar la Matriz de Adyacencia.");
        console.log("c) Calcular y Desplegar el Indegre.");
        console.log("d) Realizar Ordenamiento Topologico.");
        console.log("e) Salir Del Programa.");
        op = prompt("Ingrese una opción: ");

        switch (op) {
            case 'a':
                gf = new Grafo(7);
                gf.crearArista(0, 2);
                gf.crearArista(0, 1);
                gf.crearArista(0, 3);
                gf.crearArista(1, 3);
                gf.crearArista(2, 3);
                gf.crearArista(2, 4);
                gf.crearArista(3, 5);
                gf.crearArista(4, 5);
                break;
            case 'b':
                gf.muestraMatrizAdyacencia();
                break;
            case 'c':
                gf.calcularIndegree();
                gf.muestraIndegree();
                break;
            case 'd':
                gf.ordenamientoTopologico();
                break;
            case 'e':
                console.log("Gracias por usar el programa.");
                break;
            default:
                console.log("La opcion que eligio no es correcta, por favor intente de nuevo.");
                break;
        }
    } while (op !== 'e');
}

main();
