class NumerosControl {
    constructor() {
        this.temp = 0;
        this.n = 50;
        this.pasadas = 0;
        this.comparaciones = 0;
        this.intercambios = 0;
        this.arreglo = new Array(50).fill(0);
    }

    generar() {
        for (let i = 0; i < this.n; i++) {
            this.arreglo[i] = Math.floor(Math.random() * (19210100 - 19210000) + 19210000);
        }
    }

    desplegar() {
        console.log("Numeros de control: ");
        this.arreglo.forEach((numero, index) => {
            console.log(`${index + 1}.- ${numero}`);
        });
    }

    ordenar() {
        for (let m = 0; m < this.arreglo.length - 1; m++) {
            this.pasadas++;
            for (let x = 0; x < this.arreglo.length - 1 - m; x++) {
                this.comparaciones++;
                if (this.arreglo[x] > this.arreglo[x + 1]) {
                    this.intercambios++;
                    this.temp = this.arreglo[x];
                    this.arreglo[x] = this.arreglo[x + 1];
                    this.arreglo[x + 1] = this.temp;
                }
            }
        }
    }
}

const Menu = () => {
    let b = new NumerosControl();
    let OPS;
    do {
        console.clear();
        console.log("Bienvenido al menu, por favor seleccione una de las siguientes opciones.. ");
        console.log("\na) Inicializar el arreglo. ");
        console.log("\nb) Desplegar el arreglo. ");
        console.log("\nc) Ordenar el Arreglo. ");
        console.log("\nd) Salir Del Programa. ");

        OPS = prompt("Ingrese la opción a ejecutar: ");
        switch (OPS) {
            case 'a':
                b = new NumerosControl();
                b.generar();
                alert("\nEl arreglo se ha generado correctamente.");
                break;
            case 'b':
                b.desplegar();
                alert("\nEl arreglo se ha desplegado correctamente.");
                break;
            case 'c':
                b.ordenar();
                alert("\nEl arreglo se ha ordenado correctamente.");
                break;
            case 'd':
                console.log("Gracias por usar el programa.");
                break;
            default:
                alert("\nLa opción que eligió no es correcta, por favor intente de nuevo.");
                break;
        }
    } while (OPS !== 'd');
}

Menu();
