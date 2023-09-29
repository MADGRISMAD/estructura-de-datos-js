const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class TorresHanoi {
    constructor() {
        this.mv = 0;
    }

    Hanoi(N, Origen, Auxiliar, Destino) {
        if (N === 1) {
            console.log(`\nMover un disco de ${Origen} a ${Destino}`);
            this.mv += 1;
        } else {
            this.Hanoi(N - 1, Origen, Destino, Auxiliar);
            console.log(`\nMover un disco de ${Origen} a ${Destino}`);
            this.mv += 1;

            this.Hanoi(N - 1, Auxiliar, Origen, Destino);
        }
    }

    Total() {
        console.log(`\n\nMovimientos Realizados en total: ${this.mv}`);
    }
}

function mainMenu() {
    const startTime = new Date();

    const loopMenu = () => {
        rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Hacer el calculo de los movimientos.\nb) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
            switch (OPS) {
                case 'a':
                    rl.question('Ingrese un valor numerico: ', (input) => {
                        const N = parseInt(input);
                        const t = new TorresHanoi();
                        t.Hanoi(N, 'Origen', 'Auxiliar', 'Destino');
                        t.Total();

                        rl.question('\nPresiona ENTER para volver al menu.', loopMenu);
                    });
                    break;

                case 'b':
                    const endTime = new Date();
                    const elapsedTime = (endTime - startTime) / 1000;

                    console.log(`\nTiempo del uso del programa: ${elapsedTime.toFixed(2)} segundos.`);
                    // Garbage collection info has been omitted as it doesn't directly apply in JS.
                    console.log('\nPulse ENTER para salir del programa.');
                    rl.close();
                    break;

                default:
                    console.log('\nLa opcion que eligio no es correcta, por favor intente de nuevo.');
                    console.log('\nPresiona ENTER para volver al menu.');
                    rl.question('', loopMenu);
                    break;
            }
        });
    };

    loopMenu();
}

mainMenu();
