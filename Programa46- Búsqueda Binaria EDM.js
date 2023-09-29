class Binaria {
    constructor() {
        this.N = 32;
        this.PASADAS = 0;
        this.PASADAS2 = 0;
        this.COMPARACIONES = 0;
        this.COMPARACIONES2 = 0;
        this.INTERCAMBIOS = 0;
        this.found = false;
        this.arreglo = ["Morelos", "Michoacan", "Nayarit", "Estado de Mexico", ]; // shortened for brevity

        // For generating, we'll simply shuffle the array randomly
        this.arreglo.sort(() => Math.random() - 0.5);
    }

    generar() {
        // Shuffle the array randomly
        this.arreglo.sort(() => Math.random() - 0.5);
    }

    desplegar() {
        console.log("Estados de México");
        this.arreglo.forEach((estado, index) => {
            console.log((index + 1) + " " + estado);
        });
    }

    ordenar() {
        for (let a = 0; a < this.arreglo.length - 1; a++) {
            this.PASADAS++;
            for (let b = 0; b < this.arreglo.length - 1 - a; b++) {
                this.COMPARACIONES++;
                if (this.arreglo[b] > this.arreglo[b + 1]) {
                    this.INTERCAMBIOS++;
                    let temp = this.arreglo[b];
                    this.arreglo[b] = this.arreglo[b + 1];
                    this.arreglo[b + 1] = temp;
                }
            }
        }
    }

    buscar(key) {
        this.found = false;
        let low = 0;
        let mid = 0;
        let hi = this.N - 1;

        this.PASADAS2++;
        while (low <= hi && !this.found) {
            this.COMPARACIONES2++;
            mid = Math.floor((low + hi) / 2);

            if (this.arreglo[mid] === key) {
                this.found = true;
            } else {
                if (this.arreglo[mid] > key) {
                    hi = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }

        if (!this.found) {
            console.log("No esta el elemento: " + key + " en el arreglo");
        } else {
            console.log("El elemento " + key + " esta en la posición: " + (mid + 1));
        }
    }
}

const M = new Binaria();

let OPS;
do {
    console.clear();

    console.log("Bienvenido al menu, por favor seleccione una de las siguientes opciones.");
    console.log("a) Generar el Arreglo.");
    console.log("b) Ordenar el Arreglo.");
    console.log("c) Desplegar el Arreglo y buscar un Elemento.");
    console.log("d) Salir Del Programa.");
    console.log("Ingrese la opcion a ejecutar: ");

    OPS = "";  // You would ideally get input from the user here.

    switch (OPS) {
        case 'a':
            M.generar();
            console.log("Valores generados correctamente.");
            break;
        case 'b':
            M.ordenar();
            console.log("Valores ordenados correctamente.");
            break;
        case 'c':
            M.desplegar();
            console.log("Ingrese el estado que desea encontrar: ");
            let EST = "";  // You would ideally get input from the user here.
            M.buscar(EST);
            break;
        case 'd':
            console.log("Gracias por usar el programa.");
            break;
        default:
            console.log("La opcion que eligio no es correcta, por favor intente de nuevo.");
            break;
    }

} while (OPS !== 'd');
