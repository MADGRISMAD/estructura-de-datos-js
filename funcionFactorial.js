const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Recursividad {
    Factorial(fact) {
        if (fact > 0) {
            return fact * this.Factorial(fact - 1);
        } else {
            return 1;
        }
    }

    // The garbage collection feature in C# has been omitted as it doesn't have a direct JS counterpart.
}

function mainMenu() {
    const startTime = new Date();

    const loopMenu = () => {
        rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Imprimir numero factorial.\nb) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
            switch (OPS) {
                case 'a':
                    const re = new Recursividad();
                    const n = re.Factorial(6);
                    console.log(`El factorial de 6 es ${n}`);
                    console.log('\nPresiona ENTER para volver al menu.');
                    rl.question('', loopMenu);
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
