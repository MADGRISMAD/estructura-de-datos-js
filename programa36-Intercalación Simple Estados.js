class InterSimple {
    constructor() {
        this.pasadas = 0;
        this.comparaciones = 0;
        this.intercambios = 0;
        this.C = new Array(32).fill('');
    }

    generar() {
        this.A = ["Aguascalientes", "Mexicali", "La Paz", "Campeche", "Tuxtla Gutiérrez", "Chihuahua",
            "Ciudad de México", "Saltillo", "Colima", "Durango", "Toluca", "Guanajuato", "Chilpancingo", "Pachuca",
            "Guadalajara", "Morelia"];

        this.B = ["Cuernavaca", "Tepic", "Monterrey", "Oaxaca", "Puebla", "Querétaro", "Chetumal",
            "San Luis Potosí", "Culiacán", "Hermosillo", "Villahermosa", "Ciudad Victoria", "Tlaxcala", "Xalapa", "Mérida", "Zacatecas"];
        console.log("\nLos Arreglos A y B han sido Generados");
    }

    desplegar() {
        console.log("Arreglo A Desplegado\n");
        this.A.forEach((item, index) => {
            console.log(`${index + 1} : ${item}`);
        });

        console.log("\nArreglo B Desplegado\n");
        this.B.forEach((item, index) => {
            console.log(`${index + 1} : ${item}`);
        });
    }

    ordenar() {
        let aux = "";
        for (let i = 0; i < this.A.length - 1; i++) {
            this.pasadas++;
            for (let j = 0; j < this.A.length - 1 - i; j++) {
                this.comparaciones++;
                if (this.A[j] > this.A[j + 1]) {
                    aux = this.A[j];
                    this.A[j] = this.A[j + 1];
                    this.A[j + 1] = aux;
                    this.intercambios++;
                }
            }
        }
        for (let i = 0; i < this.B.length - 1; i++) {
            this.pasadas++;
            for (let j = 0; j < this.B.length - 1 - i; j++) {
                this.comparaciones++;
                if (this.B[j] > this.B[j + 1]) {
                    aux = this.B[j];
                    this.B[j] = this.B[j + 1];
                    this.B[j + 1] = aux;
                    this.intercambios++;
                }
            }
        }
        console.log("\nLos arreglos A y B se han Ordenado Correctamente");
    }

    intercalar() {
        let i = 0, j = 0, k = 0;
        const N = this.A.length, M = this.B.length;
        this.pasadas++;

        while (i < N && j < M) {
            this.comparaciones++;
            if (this.A[i] < this.B[j]) {
                this.intercambios++;
                this.C[k] = this.A[i];
                i++;
                k++;
            } else {
                this.C[k] = this.B[j];
                j++;
                k++;
            }
        }

        if (i >= N) {
            for (let x = j; x < M; x++) {
                this.intercambios++;
                this.C[k] = this.B[x];
                k++;
            }
        } else {
            for (let x = i; x < N; x++) {
                this.C[k] = this.A[x];
                k++;
                this.intercambios++;
            }
        }

        console.log("\nIntercalación Correcta");
    }

    desplegarC() {
        console.log("Arreglo C Desplegado\n");
        this.C.forEach((item, index) => {
            console.log(`[${index + 1}].- ${item}`);
        });
    }
}

const start = () => {
    const obj = new InterSimple();
    let opc;
    do {
        console.clear();
        console.log("MENU DE Intercalación Simple");
        console.log("a. inicializar vectores A y B.");
        console.log("b. Desplegar vectores A y B.");
        console.log("c. Ordenar vectores A y B.");
        console.log("d. Intercalar vectores A y B.");
        console.log("e. Desplegar vector C.");
        console.log("f. Salir del programa.");
        opc = prompt("Elija una opción: ");

        switch (opc) {
            case 'a':
                obj.generar();
                break;
            case 'b':
                obj.desplegar();
                break;
            case 'c':
                obj.ordenar();
                break;
            case 'd':
                obj.intercalar();
                break;
            case 'e':
                obj.desplegarC();
                break;
            case 'f':
                console.log("\nDESPLIEGUE DE COMPLEJIDADES");
                console.log("Número de pasadas: " + obj.pasadas);
                console.log("Número de comparaciones: " + obj.comparaciones);
                console.log("Número de intercambios: " + obj.intercambios);
                break;
            default:
                console.log("\nOpción inválida, intente otra vez.");
                break;
        }
    } while (opc !== 'f');
}

start();
