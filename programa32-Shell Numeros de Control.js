class Shell {
    constructor() {
        this.comparaciones = 0;
        this.intercambios = 0;
        this.pasadas = 0;
        this.Arreglo = new Array(50).fill(0);
        this.V = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
    }

    generar() {
        for (let i = 0; i < this.Arreglo.length; i++) {
            this.Arreglo[i] = Math.floor(Math.random() * (20219999 - 20210000 + 1) + 20210000);
        }
        console.log("\nArreglo creado");
    }

    desplegar() {
        this.Arreglo.forEach((num, index) => {
            console.log(`[${index + 1}] = ${num}`);
        });
    }

    ordenar() {
        let incremento = this.V.length - 1;

        for (let m = incremento; m >= 0; m--) {
            this.pasadas++;
            let H = this.V[m];
            for (let j = H; j <= this.Arreglo.length - 1; j++) {
                let i = j - H;
                let k = this.Arreglo[j];
                this.comparaciones++;
                while (i >= 0 && k <= this.Arreglo[i]) {
                    this.intercambios++;
                    this.Arreglo[i + H] = this.Arreglo[i];
                    i = i - H;
                }
                this.Arreglo[i + H] = k;
                this.intercambios++;
            }
        }
        console.log("Arreglo ordenado correctamente");
    }
}

const start = () => {
    const obj = new Shell();
    let opc;
    do {
        console.clear();
        console.log("METODO DE SHELL DE NO.CONTROL");
        console.log("Menu");
        console.log("a.-generar el arreglo.");
        console.log("b.-Desplegar el arreglo");
        console.log("c.-Ordenar el arreglo");
        console.log("d.-Salir");
        console.log("Elija una opción: ");
        opc = prompt();

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
                console.log("Número de pasadas: " + obj.pasadas);
                console.log("Número de comparaciones: " + obj.comparaciones);
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
