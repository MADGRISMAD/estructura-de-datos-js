const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class BusquedaBinaria {
    BusquedaBi(A, low, high, num) {
        if (low > high) {
            return -1;
        }

        let mid = Math.floor((low + high) / 2);

        if (num === A[mid]) {
            return mid;
        }
        if (num < A[mid]) {
            return this.BusquedaBi(A, low, mid - 1, num);
        } else {
            return this.BusquedaBi(A, mid + 1, high, num);
        }
    }
}

let A = [];

function mainMenu() {
    const startTime = new Date();

    const loopMenu = () => {
        rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Generar y ordenar un arreglo de 10 numeros.\nb) Buscar un elemento en particular.\nc) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
            switch (OPS) {
                case 'a':
                    A = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 10);
                    console.log('\nArreglo de 10 Numeros:');
                    A.forEach((num, idx) => {
                        console.log(`Numero[${idx + 1}] = ${num}`);
                    });

                    A.sort((a, b) => a - b);
                    console.log('\n\nEl Arreglo Ordenado es:');
                    A.forEach((num, idx) => {
                        console.log(`Numero[${idx + 1}] = ${num}`);
                    });

                    rl.question('\n\nPulse ENTER para volver al menu.', loopMenu);
                    break;

                case 'b':
                    rl.question('\nIngresa el Numero a buscar: ', (input) => {
                        const n = parseInt(input);
                        const binSearch = new BusquedaBinaria();
                        const numeroIndex = binSearch.BusquedaBi(A, 0, A.length - 1, n);

                        A.forEach((num) => {
                            console.log(`El arreglo es: ${num}`);
                        });

                        if (numeroIndex !== -1) {
                            console.log(`\nEl Numero se encontro en la posicion numero: ${numeroIndex + 1}`);
                        } else {
                            console.log('\nEl numero no se encuentra en el arreglo.');
                        }

                        rl.question('\n\nPulse ENTER para volver al menu.', loopMenu);
                    });
                    break;

                case 'c':
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
