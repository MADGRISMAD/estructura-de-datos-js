const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class SUMA {
    IMPSUM(S1, S2) {
        let RP = S1 + S2;
        console.log(`\nEl resultado de su suma es: ${RP}`);
    }
}

class RESTA {
    IMPRES(R1, R2) {
        let RS = R1 - R2;
        console.log(`\nEl resultado de su resta es: ${RS}`);
    }
}

function mainMenu() {
    rl.question('Bienvenido al menu, por favor seleccione una de las siguientes opciones..\n\na) Hacer una suma.\nb) Hacer una resta.\nc) Salir Del Programa.\n\nIngrese la opcion a ejecutar: ', (OPS) => {
        switch (OPS) {
            case 'a':
                rl.question('Ingrese el primer valor: ', (v1Input) => {
                    const v1 = parseInt(v1Input);
                    rl.question('\nIngrese el segundo valor: ', (v2Input) => {
                        const v2 = parseInt(v2Input);
                        const S = new SUMA();
                        S.IMPSUM(v1, v2);
                        returnToMenu();
                    });
                });
                break;
            
            case 'b':
                rl.question('Ingrese el primer valor: ', (vr1Input) => {
                    const vr1 = parseInt(vr1Input);
                    rl.question('\nIngrese el segundo valor: ', (vr2Input) => {
                        const vr2 = parseInt(vr2Input);
                        const R = new RESTA();
                        R.IMPRES(vr1, vr2);
                        returnToMenu();
                    });
                });
                break;

            case 'c':
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
    rl.question('\n\nPresiona ENTER para volver al menu. ', () => {
        mainMenu();
    });
}

mainMenu();
