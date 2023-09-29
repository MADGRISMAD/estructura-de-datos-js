const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Recursividad {
    Imprimir(x) {
        if (x > 0) {
            this.Imprimir(x - 1);
            console.log(x);
        }
    }
}

function mainMenu() {
    rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Imprimir numero de manera descendiente.\nb) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
        switch (OPS) {
            case 'a':
                const re = new Recursividad();

                rl.question('Ingresa un valor numerico para que se desglose descendientemente: ', (input) => {
                    const n = parseInt(input);
                    console.log();
                    re.Imprimir(n);
                    returnToMenu();
                });
                break;

            case 'b':
                console.log('\n\nGracias por usar el programa. Adiós.');
                rl.close();
                break;

            default:
                console.log('\nLa opcion que eligio no es correcta, por favor intente de nuevo.');
                returnToMenu();
                break;
        }
    });
}

function returnToMenu() {
    rl.question('\nPresiona ENTER para volver al menu. ', () => {
        mainMenu();
    });
}

mainMenu();
