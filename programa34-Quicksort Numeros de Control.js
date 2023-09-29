class Quick {
    constructor() {
        this.comparaciones = 0;
        this.intercambios = 0;
        this.pasadas = 0;
        this.Numeros = new Array(50).fill(0);
    }

    iniciar() {
        for (let i = 0; i < this.Numeros.length; i++) {
            this.Numeros[i] = Math.floor(Math.random() * (20219999 - 20210000) + 20210000);
        }
        console.log("\nArreglo creado");
    }

    desplegar() {
        console.log("Numeros de control");
        this.Numeros.forEach((num, index) => {
            console.log(`[${index + 1}] = ${num}`);
        });
    }

    ordenar(L, R) {
        let i = L;
        let j = R;
        let x = this.Numeros[Math.floor((L + R) / 2)];
        this.pasadas++;

        do {
            while (this.Numeros[i] < x) {
                i++;
                this.comparaciones++;
            }
            while (this.Numeros[j] > x) {
                j--;
                this.comparaciones++;
            }
            if (i <= j) {
                const temp = this.Numeros[i];
                this.Numeros[i] = this.Numeros[j];
                this.Numeros[j] = temp;
                i++;
                j--;
                this.intercambios++;
            }
        } while (i <= j);

        if (L < j) this.ordenar(L, j);
        if (i < R) this.ordenar(i, R);
    }
}

const start = () => {
    const obj = new Quick();
    let opc;
    do {
        console.clear();
        console.log("METODO DE QUICK DE NO.CONTROL");
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
                obj.ordenar(0, obj.Numeros.length - 1);
                console.log("Arreglo ordenado correctamente");
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
