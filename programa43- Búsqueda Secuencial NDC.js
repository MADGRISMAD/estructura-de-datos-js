class Secuencial {
    constructor() {
        this.arreglo = new Array(50).fill(0).map(() => this.getRandomInt(19210000, 19210100));
        this.N = 50;
        this.found = false;
        this.PASADAS = 0;
        this.COMPARACIONES = 0;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generar() {
        for (let i = 0; i < this.N; i++) {
            this.arreglo[i] = this.getRandomInt(19210000, 19210100);
        }
    }

    desplegar() {
        this.arreglo.forEach((num, index) => {
            console.log((index + 1) + " " + num);
        });
    }

    buscar(key) {
        this.found = false;
        let I = 0;

        this.PASADAS++;
        while (I < this.N && !this.found) {
            this.COMPARACIONES++;
            if (key === this.arreglo[I]) {
                this.found = true;
            } else {
                I++;
            }
        }

        if (!this.found) {
            console.log("No esta el elemento " + key + " en el arreglo");
        } else {
            console.log("El elemento " + key + " esta en la posicion: " + (I + 1));
        }
    }
}

const M = new Secuencial();

let OPS;
do {
    console.clear();  // Note: This might not work in all environments.

    console.log("Bienvenido al menu, por favor seleccione una de las siguientes opciones.");
    console.log("a) Generar el Arreglo.");
    console.log("b) Desplegar el Arreglo y buscar un Elemento.");
    console.log("c) Salir Del Programa.");
    console.log("Ingrese la opcion a ejecutar: ");

    OPS = "";  // Here, you would ideally get input from the user.

    switch (OPS) {
        case 'a':
            M.generar();
            console.log("Los numeros de control fueron generados con exito.");
            break;
        case 'b':
            M.desplegar();
            console.log("Ingrese el numero de control que desea buscar: ");
            let N = parseInt("");  // Here, you would ideally get input from the user.
            M.buscar(N);
            break;
        case 'c':
            console.log("Gracias por usar el programa.");
            break;
        default:
            console.log("La opcion que eligio no es correcta, por favor intente de nuevo.");
            break;
    }

} while (OPS !== 'c');
