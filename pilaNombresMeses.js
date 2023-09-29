const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Pila {
    constructor(tamanio) {
        this.Max = tamanio;
        this.Top = -1;
        this.Pila = new Array(tamanio);
        console.log("La pila ha sido creada con éxito.");
    }

    insertar(elemento) {
        if (this.Top !== this.Max - 1) {
            this.Top++;
            this.Pila[this.Top] = elemento;
            console.log(`Valor ${elemento} capturado en la posición #${this.Top + 1}`);
        } else {
            console.log("La pila está llena");
        }
    }

    eliminar() {
        if (this.Top !== -1) {
            console.log(`El valor ${this.Pila[this.Top]} será eliminado...`);
            this.Pila[this.Top] = "";
            this.Top--;
        } else {
            console.log("La pila está vacía");
        }
    }

    recorrido() {
        if (this.Top !== -1) {
            for (let i = this.Top; i >= 0; i--) {
                console.log(`Elemento: ${this.Pila[i]} Posición: ${i}`);
            }
        } else {
            console.log("La pila está vacía");
        }
    }

    buscar(elemento) {
        let found = false;
        for (let i = 0; i <= this.Top; i++) {
            if (this.Pila[i] === elemento) {
                console.log(`El dato ${elemento} fue encontrado en la posición ${i}`);
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(`El dato ${elemento} no se encontró en la pila`);
        }
    }
}

const main = () => {
    const startTime = new Date();
    let pila = null;

    const loop = () => {
        console.clear();
        console.log("PILA nombres meses del año");
        console.log("a) Crear la Pila.\nb) Insertar un Elemento.\nc) Eliminar el Dato del Tope.\nd) Recorrer la Pila.\ne) Buscar un Elemento.\nf) Salir del Programa.");
        rl.question("Escriba qué opción quiere: ", (opc) => {
            switch (opc) {
                case 'a':
                    rl.question("\nIngrese el tamaño de la pila: ", (tamanio) => {
                        pila = new Pila(Number(tamanio));
                        loop();
                    });
                    break;

                case 'b':
                    if (!pila) {
                        console.log("\nLa pila no ha sido creada");
                        loop();
                        return;
                    }
                    rl.question("\nIngrese el mes que desea agregar: ", (elemento) => {
                        pila.insertar(elemento);
                        loop();
                    });
                    break;

                case 'c':
                    if (!pila) {
                        console.log("\nLa pila no ha sido creada");
                        loop();
                        return;
                    }
                    pila.eliminar();
                    loop();
                    break;

                case 'd':
                    if (!pila) {
                        console.log("\nLa pila no ha sido creada");
                        loop();
                        return;
                    }
                    pila.recorrido();
                    loop();
                    break;

                case 'e':
                    if (!pila) {
                        console.log("\nLa pila no ha sido creada");
                        loop();
                        return;
                    }
                    rl.question("\nIngrese el nombre a buscar: ", (nombre) => {
                        pila.buscar(nombre);
                        loop();
                    });
                    break;

                case 'f':
                    const endTime = new Date();
                    const elapsed = (endTime - startTime) / 1000;
                    console.log(`Tiempo transcurrido: ${elapsed} segundos`);
                    rl.close();
                    break;

                default:
                    console.log("\nOpción no válida, intente otra vez");
                    loop();
                    break;
            }
        });
    };

    loop();
};

main();
