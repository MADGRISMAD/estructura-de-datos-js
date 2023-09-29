const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Fibonacci {
    static Fibonacci(n) {
        if (n === 1 || n === 2) {
            return 1;
        } else {
            return Fibonacci.Fibonacci(n - 1) + Fibonacci.Fibonacci(n - 2);
        }
    }
}

function mainMenu() {
    const startTime = new Date();

    const loopMenu = () => {
        rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Hacer el metodo Fibonacci a un numero.\nb) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
            switch (OPS) {
                case 'a':
                    rl.question('Ingrese un valor numerico: ', (input) => {
                        const n = parseInt(input);
                        console.log(`\nSu valor convertido es de: ${Fibonacci.Fibonacci(n)}`);
                        console.log('\n\nPulse ENTER para volver al menu.');
                        rl.question('', loopMenu);
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
