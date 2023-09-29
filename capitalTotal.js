const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class CAPTOTAL {
    Calcular(m, x, n) {
        if (n === 0) {
            return m;
        } else {
            return this.Calcular(m, x, n - 1) + (this.Calcular(m, x, n - 1) * x);
        }
    }
}

function mainMenu() {
    const startTime = new Date();

    const loopMenu = () => {
        rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Hacer el calculo.\nb) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
            switch (OPS) {
                case 'a':
                    rl.question('\nIngresa el monto de inversión: ', (MInput) => {
                        const M = parseFloat(MInput);
                        rl.question('Ingresa el Interes anual: ', (IAInput) => {
                            let IA = parseFloat(IAInput) / 100;
                            rl.question('Ingresa el Numero de años de la inversión: ', (nInput) => {
                                const n = parseInt(nInput);
                                const x = new CAPTOTAL();
                                console.log(`\nEl total de la inversión es: ${x.Calcular(M, IA, n).toFixed(2)}`);
                                rl.question('\n\nPresiona ENTER para volver al menu.', loopMenu);
                            });
                        });
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
