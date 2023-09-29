const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class SumaVector {
    sumarE(v, n) {
        if (n === 0) {
            return 0;
        } else {
            return this.sumarE(v, n - 1) + v[n - 1];
        }
    }
}

function mainMenu() {
    const startTime = new Date();
    const sv = new SumaVector();
    let v = [];
    let sum = 0;
    let n = 0;

    const loopMenu = () => {
        rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Generar vector aleatoriamente.\nb) Sumar el vector.\nc) Desplegar vector y suma.\nd) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
            switch (OPS) {
                case 'a':
                    rl.question('\nIngresa el tamaño del vector para generarlo: ', (inputSize) => {
                        n = parseInt(inputSize);
                        v = Array.from({ length: n }, () => Math.floor(Math.random() * 10));
                        console.log("\nVector Creado Correctamente");
                        console.log("\n\nPresiona Enter para Volver al menu");
                        loopMenu();
                    });
                    break;

                case 'b':
                    sum = sv.sumarE(v, n);
                    console.log("\n\nLa Suma fue realizada con Exito");
                    console.log("\n\nPresiona Enter para volver al menu");
                    loopMenu();
                    break;

                case 'c':
                    console.log("\n\nEl vector es el siguiente: ");
                    v.forEach((value, index) => {
                        console.log(`Numero[${index + 1}] = ${value}`);
                    });
                    console.log(`\n\nLa suma de los elementos del vector es: ${sum}`);
                    console.log("\n\nPresiona Enter para volver al menu");
                    loopMenu();
                    break;

                case 'd':
                    const endTime = new Date();
                    const elapsedTime = (endTime - startTime) / 1000;
                    console.log(`\nTiempo del uso del programa: ${elapsedTime.toFixed(2)} segundos.`);
                    // Memory/garbage collection info has been omitted as it doesn't directly apply in JS.
                    console.log('\nPulse ENTER para salir del programa.');
                    rl.close();
                    break;

                default:
                    console.log('\nLa opcion que eligio no es correcta, por favor intente de nuevo.');
                    console.log('\nPresiona ENTER para volver al menu.');
                    loopMenu();
                    break;
            }
        });
    };

    loopMenu();
}

mainMenu();
