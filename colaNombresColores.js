const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Cola {
    constructor(tamanio) {
        this.Max = tamanio;
        this.Frente = -1;
        this.Final = -1;
        this.cola = new Array(tamanio);
        console.log("La cola ha sido creada con éxito.");
    }

    encolar(elemento) {
        if (this.Frente === 0 && this.Final === this.Max - 1) {
            console.log("La cola está llena.");
        } else {
            if (this.Frente === -1) {
                this.Frente = 0;
                this.Final = 0;
            } else {
                this.Final++;
            }
            this.cola[this.Final] = elemento;
        }
    }

    desencolar() {
        if (this.Frente !== -1) {
            console.log("Eliminando el dato: " + this.cola[this.Frente]);
            if (this.Frente === this.Final) {
                this.Frente = -1;
                this.Final = -1;
            } else {
                this.Frente++;
            }
        } else {
            console.log("La cola está vacía.");
        }
    }

    recorrido() {
        if (this.Frente !== -1) {
            for (let i = this.Frente; i <= this.Final; i++) {
                console.log(`Elemento: ${this.cola[i]} Posición: ${i}`);
            }
        } else {
            console.log("La cola está vacía.");
        }
    }

    busqueda(elemento) {
        if (this.Frente !== -1) {
            for (let i = this.Frente; i <= this.Final; i++) {
                if (elemento === this.cola[i]) {
                    console.log("Dato encontrado en la posición: " + i);
                    return;
                }
            }
            console.log("Dato " + elemento + " no encontrado en la cola.");
        } else {
            console.log("La cola está vacía.");
        }
    }
}

const main = () => {
    let cola = null;

    const menu = () => {
        console.clear();
        console.log("\nCOLA nombre de colores");
        console.log("\na) Crear la Cola");
        console.log("b) Insertar un Elemento al final");
        console.log("c) Eliminar el Dato del Frente");
        console.log("d) Recorrer la Cola");
        console.log("e) Buscar un Elemento");
        console.log("f) Salir del Programa");
        rl.question("\nSeleccione una opción: ", (opc) => {
            switch (opc) {
                case 'a':
                    rl.question("Defina el tamaño de la cola: ", (tamanio) => {
                        cola = new Cola(Number(tamanio));
                        menu();
                    });
                    break;
                case 'b':
                    rl.question("Ingrese el dato a añadir: ", (dato) => {
                        cola.encolar(dato);
                        menu();
                    });
                    break;
                case 'c':
                    cola.desencolar();
                    menu();
                    break;
                case 'd':
                    cola.recorrido();
                    menu();
                    break;
                case 'e':
                    rl.question("Ingrese el dato a buscar: ", (buscar) => {
                        cola.busqueda(buscar);
                        menu();
                    });
                    break;
                case 'f':
                    console.log("\nEl programa ha finalizado.");
                    rl.close();
                    break;
                default:
                    console.log("Opción inválida, intente de nuevo.");
                    menu();
                    break;
            }
        });
    };

    menu();
};

main();
