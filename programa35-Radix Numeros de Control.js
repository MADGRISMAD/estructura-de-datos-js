class Nodo {
    constructor(i, n) {
        this.info = i;
        this.next = n;
    }
}

class Radix {
    constructor() {
        this.intercambios = 0;
        this.pasadas = 0;
        this.rear = new Array(10).fill(-1);
        this.front = new Array(11).fill(-1);
        this.node = Array.from({ length: 50 }, (_, index) => new Nodo(0, index + 1));
        this.node[this.node.length - 1].next = -1;
        this.X = new Array(50).fill(0);
    }

    iniciar() {
        for (let i = 0; i < this.X.length; i++) {
            this.X[i] = Math.floor(Math.random() * (20219999 - 20210000) + 20210000);
        }
        console.log("\nArreglo creado");
    }

    desplegar() {
        console.log("Numeros de control");
        this.X.forEach((num, index) => {
            console.log(`[${index + 1}] = ${num}`);
        });
    }

    ordenar() {
        let p, k, y, expon, q;
        const N = 50, M = 8;
        let j = 0, first = 0;

        for (let i = 0; i < N; i++) {
            this.node[i].info = this.X[i];
            this.node[i].next = i + 1;
            this.intercambios++;
        }
        this.node[N - 1].info = this.X[N - 1];
        this.node[N - 1].next = -1;
        this.intercambios++;

        for (k = 1; k <= M; k++) {
            this.pasadas++;
            for (let i = 0; i <= 9; i++) {
                this.rear[i] = -1;
            }
            for (let i = 0; i <= 10; i++) {
                this.front[i] = -1;
            }
            while (first !== -1) {
                p = first;
                first = this.node[first].next;
                y = this.node[p].info;
                expon = 1;

                for (let i = 1; i !== k; i++) {
                    expon = expon * 10;
                }
                j = Math.floor(y / expon % 10);
                q = this.rear[j];
                if (q === -1) {
                    this.front[j] = p;
                } else {
                    this.node[q].next = p;
                }
                this.rear[j] = p;
            }
            j = 0;
            while (j <= 9 && this.front[j] === -1) {
                j++;
            }
            first = this.front[j];
            p = j;
            while (j <= 9) {
                let i = j + 1;
                while (i <= 9 && this.front[i] === -1) {
                    i++;
                }
                if (i <= 9) {
                    p = i;
                    this.node[this.rear[j]].next = this.front[i];
                }
                j = i;
            }
            this.node[this.rear[p]].next = -1;
        }

        for (let i = 0; i <= N - 1; i++) {
            this.X[i] = this.node[first].info;
            first = this.node[first].next;
        }
        this.pasadas++;
    }
}

const start = () => {
    const obj = new Radix();
    let opc;
    do {
        console.clear();
        console.log("METODO RADIX PARA NUMEROS DE CONTROL");
        console.log("Menu");
        console.log("a.-Generar el arreglo.");
        console.log("b.-Desplegar el arreglo");
        console.log("c.-Ordenar el arreglo");
        console.log("d.-Salir");
        console.log("Elija una opción: ");
        opc = prompt();

        switch (opc) {
            case 'a':
                obj.iniciar();
                break;
            case 'b':
                obj.desplegar();
                break;
            case 'c':
                obj.ordenar();
                console.log("Arreglo ordenado correctamente");
                break;
            case 'd':
                console.log("Número de pasadas: " + obj.pasadas);
                console.log("Número de intercambios: " + obj.intercambios);
                console.log("Programa finalizado");
                break;
            default:
                console.log("Opcion invalida, intente otra vez.");
                break;
        }
    } while (opc !== 'd');
}

start();
