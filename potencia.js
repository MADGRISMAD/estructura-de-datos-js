const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Elevacion {
    Potencia(b, exp) {
        if (exp === 0) {
            return 1;
        } else {
            return b * this.Potencia(b, exp - 1);
        }
    }
}

function mainMenu() {
    const startTime = new Date();

    const loopMenu = () => {
        rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Hacer el calculo de los movimientos.\nb) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
            switch (OPS) {
                case 'a':
                    rl.question('\nIngresa el Numero a elevar: ', (baseInput) => {
                        const Base = parseInt(baseInput);
                        rl.question('\nA que potencia desea elevarlo: ', (expInput) => {
                            const Exponente = parseInt(expInput);
                            const e = new Elevacion();
                            console.log(`\nEl Numero ${Base} elevado al exponente ${Exponente} es: ${e.Potencia(Base, Exponente)}`);

                            rl.question('\n\nPresiona ENTER para volver al menu.', loopMenu);
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
