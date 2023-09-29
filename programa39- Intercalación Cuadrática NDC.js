class IntercalacionCuadratica {
    constructor() {
        this.AUX = new Array(50).fill(0);
        this.X = new Array(50).fill(0);
        this.pasadas = 0;
        this.comparaciones = 0;
        this.intercambios = 0;
    }

    generar() {
        for (let i = 0; i < this.X.length; i++) {
            this.X[i] = Math.floor(Math.random() * (20219999 - 20210000 + 1)) + 20210000;
        }
        this.AUX = new Array(50).fill(0);
        console.log("\nArreglo creado");
    }

    mostrar() {
        this.X.forEach((value, index) => {
            console.log(`[${index}] = ${value}`);
        });
    }

    intercalacionD() {
        let N = this.X.length;
        let I, J, K;
        let M1, M2;
        let L1, L2;
        let p = 1;

        while (p < N) {
            this.pasadas++;
            L1 = 0;
            K = 0;

            while (L1 + p <= N) {
                L2 = L1 + p;
                M1 = L2 - 1;

                if (L2 + p - 1 <= N) {
                    M2 = L2 + p - 1;
                } else {
                    M2 = N - 1;
                }

                I = L1;
                J = L2;

                while (I <= M1 && J <= M2) {
                    this.comparaciones++;
                    if (this.X[I] <= this.X[J]) {
                        this.AUX[K] = this.X[I];
                        I++;
                        K++;
                        this.intercambios++;
                    } else {
                        this.AUX[K] = this.X[J];
                        J++;
                        K++;
                        this.intercambios++;
                    }
                }

                if (I > M1) {
                    for (let y = J; y <= M2; y++) {
                        this.AUX[K] = this.X[y];
                        K++;
                        this.intercambios++;
                    }
                    L1 = M2 + 1;
                } else {
                    for (let y = I; y <= M1; y++) {
                        this.AUX[K] = this.X[y];
                        K++;
                        this.intercambios++;
                    }
                    L1 = M2 + 1;
                }
            }

            for (I = L1; K < N; I++) {
                this.AUX[K] = this.X[I];
                K++;
                this.intercambios++;
            }

            for (I = 0; I < N; I++) {
                this.X[I] = this.AUX[I];
                this.intercambios++;
            }

            p = p * 2;
        }
    }
}

const start = () => {
    const obj = new IntercalacionCuadratica();
    let opc;
    do {
        console.clear();
        console.log("MENU DE Intercalación cuadrática");
        console.log("a. Generar arreglo");
        console.log("b. Desplegar arreglo");
        console.log("c. Intercalar arreglo");
        console.log("d. Salir del programa");
        opc = prompt("Elija una opción: ");

        switch (opc) {
            case 'a':
                obj.generar();
                break;
            case 'b':
                obj.mostrar();
                break;
            case 'c':
                obj.intercalacionD();
                console.log("\nIntercalación realizada correctamente");
                break;
            case 'd':
                console.log("\nDESPLIEGUE DE COMPLEJIDADES");
                // You'd need another way to measure memory and time in JavaScript
                console.log("Número de pasadas: " + obj.pasadas);
                console.log("Número de comparaciones: " + obj.comparaciones);
                console.log("Número de intercambios: " + obj.intercambios);
                break;
            default:
                console.log("\nOpción inválida, intente otra vez.");
                break;
        }
    } while (opc !== 'd');
}

start();
