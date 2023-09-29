class Grafo {
    constructor(nodos) {
        this.nodos = nodos;
        this.mAdyacencia = Array.from({ length: nodos }, () => Array(nodos).fill(0));
        this.vertices = ["Ciudad de Mexico ", "Cuernavaca ", "Puebla ", "Toluca ", "Tlaxcala "];
        this.tablaDistancia = Array.from({ length: nodos }, () => [0, Number.MAX_SAFE_INTEGER, 0]);
        this.actual;
        this.columna;
    }

    crearAristaPeso(nodoInicio, nodoFinal, peso) {
        this.mAdyacencia[nodoInicio][nodoFinal] = peso;
    }

    muestraMatrizAdyacencia() {
        console.log(this.vertices.join("\t"));
        this.mAdyacencia.forEach((row, index) => {
            console.log(`${this.vertices[index]} \t${row.join('\t')}`);
        });
    }

    obtenAdyacencia(fila, columna) {
        return this.mAdyacencia[fila][columna];
    }

    crearTablaDistancia(inicio) {
        this.tablaDistancia.forEach(row => {
            row[0] = 0;
            row[1] = Number.MAX_SAFE_INTEGER;
            row[2] = 0;
        });
        this.tablaDistancia[inicio][1] = 0;
    }

    mostrarTablaDistancia() {
        this.tablaDistancia.forEach((row, index) => {
            console.log(`${index} --> \t\t${row.join('\t')}`);
        });
        console.log('------------------');
    }

    rutaCaminoMasCorto(inicio, final) {
        this.actual = inicio;
        let columna;

        while (this.actual !== -1) {
            this.tablaDistancia[this.actual][0] = 1;
            for (columna = 0; columna < this.nodos; columna++) {
                if (this.obtenAdyacencia(this.actual, columna) !== 0) {
                    let distancia = this.obtenAdyacencia(this.actual, columna) + this.tablaDistancia[this.actual][1];
                    if (distancia < this.tablaDistancia[columna][1]) {
                        this.tablaDistancia[columna][1] = distancia;
                        this.tablaDistancia[columna][2] = this.actual;
                    }
                }
            }

            let indiceMenor = -1;
            let distanciaMenor = Number.MAX_SAFE_INTEGER;

            this.tablaDistancia.forEach((row, index) => {
                if (row[1] < distanciaMenor && row[0] === 0) {
                    indiceMenor = index;
                    distanciaMenor = row[1];
                }
            });

            this.actual = indiceMenor;
        }

        this.mostrarTablaDistancia();

        let ruta = [];
        let nodo = final;
        while (nodo !== inicio) {
            ruta.push(nodo);
            nodo = this.tablaDistancia[nodo][2];
        }
        ruta.push(inicio);
        ruta.reverse();
        console.log(ruta.join(' --> '));
    }
}

let gf = new Grafo(5);

gf.crearAristaPeso(0, 1, 90);
gf.crearAristaPeso(0, 3, 100);
gf.crearAristaPeso(1, 0, 90);
gf.crearAristaPeso(1, 2, 100);
gf.crearAristaPeso(2, 3, 350);
gf.crearAristaPeso(2, 4, 20);
gf.crearAristaPeso(3, 4, 340);
gf.crearAristaPeso(3, 1, 150);
gf.crearAristaPeso(3, 0, 100);
gf.crearAristaPeso(3, 2, 350);

gf.rutaCaminoMasCorto(0, 4);
