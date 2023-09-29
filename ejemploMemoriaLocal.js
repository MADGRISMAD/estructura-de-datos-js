const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class TablaMultiplicar {
    CargarValor() {
        const askForValue = () => {
            rl.question('Ingrese un valor (-1 para finalizar): ', (input) => {
                let valor = parseInt(input);

                if (valor !== -1) {
                    this.Calcular(valor);
                    askForValue();
                } else {
                    rl.close();
                }
            });
        };

        askForValue();
    }

    Calcular(v) {
        for (let f = v; f <= v * 10; f = f + v) {
            console.log(f);
        }
        console.log();
    }
}

const tm = new TablaMultiplicar();
tm.CargarValor();
