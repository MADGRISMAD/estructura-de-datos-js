class IntercalacionCuadratica {
    constructor() {
        this.AUX = new Array(32).fill("");
        this.X = [];
        this.pasadas = 0;
        this.comparaciones = 0;
        this.intercambios = 0;
    }

    generar() {
        this.X = [
            "Aguascalientes", "Mexicali", "La Paz", "Campeche", "Tuxtla Gutiérrez", "Chihuahua",
            "Ciudad de México", "Saltillo", "Colima", "Durango", "Toluca", "Guanajuato", "Chilpancingo", "Pachuca",
            "Guadalajara", "Morelia", "Cuernavaca", "Tepic", "Monterrey", "Oaxaca", "Puebla", "Querétaro", "Chetumal",
            "San Luis Potosí", "Culiacán", "Hermosillo", "Villahermosa", "Ciudad Victoria", "Tlaxcala", "Xalapa", "Mérida", "Zacatecas"
        ];
        this.AUX = new Array(this.X.length).fill("");
        console.log("\nArreglo creado");
    }

    mostrar() {
        this.X.forEach((value, index) => {
            console.log(`[${index}] = ${value}`);
        });
    }

    intercalacionD() {
        let P = 1;
        let L1, K, L2, M1, M2, I, J;
        while (P < this.X.length) {
            this.pasadas++;
            L1 = 0;
            K = 0;
            while (L1 + P <= this.X.length - 1) {
                L2 = L1 + P;
                M1 = L2 - 1;
                if (L2 + P - 1 <= this.X.length - 1) {
                    M2 = L2 + P - 1;
                } else {
                    M2 = this.X.length - 1;
                }
                I = L1;
                J = L2;
                while (I <= M1 && J <= M2) {
                    this.comparaciones++;
                    if (this.X[I].localeCompare(this.X[J]) <= 0) {
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
                    for (let Y = J; Y <= M2; Y++) {
                        this.AUX[K] = this.X[Y];
                        K++;
                        this.intercambios++;
                    }
                } else {
                    for (let Y = I; Y <= M1; Y++) {
                        this.AUX[K] = this.X[Y];
                        K++;
                        this.intercambios++;
                    }
                }
                L1 = M2 + 1;
            }
            for (let index = L1; K <= this.X.length - 1; index++) {
                this.AUX[K] = this.X[index];
                K++;
                this.intercambios++;
            }
            for (let index = 0; index <= this.X.length - 1; index++) {
                this.X[index] = this.AUX[index];
                this.intercambios++;
            }
            P = P * 2;
        }
        console.log("\nIntercalación realizada correctamente");
    }
}

const start = () => {
    const obj = new IntercalacionCuadratica();
    let opc;
    do {
        console.clear();
        console.log("MENU DE Intercalación cuadrática");
        console.log("a. Inicializar arreglo");
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
                break;
            case 'd':
                console.log("\nDESPLIEGUE DE COMPLEJIDADES");
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
