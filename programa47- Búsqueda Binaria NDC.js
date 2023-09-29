class BINARIA {
    constructor() {
        this.temp = 0;
        this.Numeros = 50;
        this.PASADAS = 0;
        this.PASADAS2 = 0;
        this.COMPARACIONES = 0;
        this.COMPARACIONES2 = 0;
        this.INTERCAMBIOS = 0;
        this.found = false;
        this.Arreglo = Array.from({ length: 50 }, () => Math.floor(Math.random() * (18210100 - 18210000) + 18210000));
    }

    GENERAR() {
        for (let i = 0; i < this.Numeros; i++) {
            this.Arreglo[i] = Math.floor(Math.random() * (18210100 - 18210000) + 18210000);
        }
    }

    DESPLEGAR() {
        console.log("Numeros de control");
        this.Arreglo.forEach((num, index) => {
            console.log(`${index + 1} ${num}`);
        });
    }

    ORDENAR() {
        for (let a = 0; a < this.Arreglo.length - 1; a++) {
            this.PASADAS++;
            for (let b = 0; b < this.Arreglo.length - 1 - a; b++) {
                this.COMPARACIONES++;
                if (this.Arreglo[b] > this.Arreglo[b + 1]) {
                    this.INTERCAMBIOS++;
                    this.temp = this.Arreglo[b];
                    this.Arreglo[b] = this.Arreglo[b + 1];
                    this.Arreglo[b + 1] = this.temp;
                }
            }
        }
    }

    BUSCAR(key) {
        this.found = false;
        let low = 0;
        let mid = 0;
        let hi = this.Numeros - 1;

        this.PASADAS2++;
        while (low <= hi && !this.found) {
            this.COMPARACIONES2++;
            mid = Math.floor((low + hi) / 2);

            if (this.Arreglo[mid] === key) {
                this.found = true;
            } else {
                if (this.Arreglo[mid] > key) {
                    hi = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        if (!this.found) {
            console.log(`No esta el elemento: ${key} en el arreglo`);
        } else {
            console.log(`El elemento ${key} esta en la posición: ${mid + 1}`);
        }
    }
}

const Menu = () => {
    let M = new BINARIA();
    let OPS;

    do {
        console.clear();
        console.log("Bienvenido al menu, por favor seleccione una de las siguientes opciones.. ");
        console.log("\na) Generar el Arreglo. ");
        console.log("\nb) Ordenar el Arreglo. ");
        console.log("\nc) Desplegar el Arreglo y buscar un Elemento. ");
        console.log("\nd) Salir Del Programa. ");

        OPS = prompt("Ingrese la opción a ejecutar: ");

        switch (OPS) {
            case 'a':
                M.GENERAR();
                alert("Valores generados correctamente.");
                break;
            case 'b':
                M.ORDENAR();
                alert("Valores ordenados correctamente.");
                break;
            case 'c':
                M.DESPLEGAR();
                const num = parseInt(prompt("Ingrese el estado que desea encontrar: "));
                M.BUSCAR(num);
                break;
            case 'd':
                console.log("Gracias por usar el programa.");
                break;
            default:
                alert("La opción que eligió no es correcta, por favor intente de nuevo.");
                break;
        }

    } while (OPS !== 'd');
}

Menu();
