class BusquedaHash {
    constructor() {
        this.K = Array(50).fill(0);
        this.V = Array(50).fill(0);
        this.comparaciones = 0;
        this.pasadas = 0;
        this.intercambios = 0;
        this.pasadasB = 0;
        this.comparacionesB = 0;
        this.D = 0;
        this.i = 0;
        this.DX = 0;

        // Generating values for K
        for (let i = 0; i < this.K.length; i++) {
            this.K[i] = Math.floor(Math.random() * (20219999 - 20210000) + 20210000);
        }
    }

    desplegar() {
        this.K.forEach((element, index) => {
            console.log(`[${index + 1}] ${element}`);
        });
    }

    desplegarV() {
        this.V.forEach((element, index) => {
            console.log(`[${index + 1}] ${element}`);
        });
    }

    asignar() {
        const N = this.K.length - 1;
        for (this.i = 0; this.i <= N; this.i++) {
            this.D = (this.K[this.i] % N) + 1;
            while (this.V[this.D] !== 0) {
                this.DX = this.D + 1;
                if (this.DX > N) {
                    this.D = 0;
                } else {
                    this.D = this.DX;
                }
            }
            this.V[this.D] = this.K[this.i];
        }
    }

    buscar(key) {
        const n = this.K.length;
        this.D = (key % (n - 1)) + 1;
        if (this.V[this.D] === key) {
            console.log(`El elemento: ${key} Esta en la posición: ${this.D + 1}`);
        } else {
            this.DX = this.D + 1;
            while (this.DX <= (n - 1) && this.V[this.DX] !== key && this.V[this.DX] !== 0 && this.DX !== this.D) {
                this.DX++;
                if (this.DX > (n - 1)) {
                    this.DX = 0;
                }
            }
            if (this.V[this.DX] === key) {
                console.log(`El elemento: ${key} Esta en la posición: ${this.D + 1}`);
            } else {
                console.log(`El elemento: ${key} NO está en el Arreglo`);
            }
        }
    }
}

const hash = new BusquedaHash();
let op = '';
do {
    console.clear();
    console.log("MENU Busqueda Binaria");
    console.log("a) Generar Arreglo K y V.");
    console.log("b) Desplegar Arreglo K");
    console.log("c) Asignar Nuevas Direcciones.");
    console.log("d) Desplegar Arreglo V Y Buscar Elementos.");
    console.log("e) Salir del programa.");
    console.log("Introduzca el número de la operación: ");

    // In this example, we use prompt to get user input.
    op = prompt("Ingrese la opción");

    switch (op) {
        case 'a':
            console.clear();
            hash.generar();
            console.log("Arreglo Generado.");
            break;
        case 'b':
            console.clear();
            hash.desplegar();
            break;
        case 'c':
            console.clear();
            hash.asignar();
            console.log("Direcciones Asignadas");
            break;
        case 'd':
            console.clear();
            hash.desplegarV();
            const key = parseInt(prompt("Ingrese un elemento a buscar: "));
            hash.buscar(key);
            break;
        case 'e':
            console.log("Programa Finalizado.");
            break;
        default:
            console.clear();
            console.log("[ERROR] Opción inválida - \nEnter para regresar al menú");
            break;
    }
} while (op !== 'e');
