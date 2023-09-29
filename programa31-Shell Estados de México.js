class Shell {
    constructor() {
        this.comparaciones = 0;
        this.intercambios = 0;
        this.pasadas = 0;
        this.Capitales = ["Aguascalientes", "Mexicali", "La Paz", "Campeche", "Tuxtla Gutiérrez", "Chihuahua",
            "Ciudad de México", "Saltillo", "Colima", "Durango", "Toluca", "Guanajuato", "Chilpancingo", "Pachuca",
            "Guadalajara", "Morelia", "Cuernavaca", "Tepic", "Monterrey", "Oaxaca", "Puebla", "Querétaro", "Chetumal",
            "San Luis Potosí", "Culiacán", "Hermosillo", "Villahermosa", "Ciudad Victoria", "Tlaxcala", "Xalapa", "Mérida", "Zacatecas"];
        this.V = [1, 2, 3, 5, 7, 11, 13];
    }

    iniciar() {
        console.log("\nArreglo creado");
    }

    desplegar() {
        this.Capitales.forEach((capital, index) => {
            console.log(`[${index + 1}] = ${capital}`);
        });
    }

    ordenar() {
        let incremento = this.V.length - 1;

        for (let m = incremento; m >= 0; m--) {
            this.pasadas++;
            let H = this.V[m];

            for (let j = H; j <= this.Capitales.length - 1; j++) {
                let i = j - H;
                let k = this.Capitales[j];
                this.comparaciones++;

                while (i >= 0 && k.localeCompare(this.Capitales[i]) <= 0) {
                    this.intercambios++;
                    this.Capitales[i + H] = this.Capitales[i];
                    i = i - H;
                }

                this.Capitales[i + H] = k;
                this.intercambios++;
            }
        }

        console.log("Arreglo ordenado correctamente");
    }
}

const start = () => {
    const obj = new Shell();
    let opc;
    do {
        console.clear();
        console.log("METODO DE SHELL DE CAPITALES");
        console.log("Menu");
        console.log("a.-iniciar el arreglo.");
        console.log("b.-Desplegar el arreglo");
        console.log("c.-Ordenar el arreglo");
        console.log("d.-Salir");
        console.log("Elija una opción: ");
        opc = prompt();

        switch (opc) {
            case 'a':
                obj.iniciar();
                break;
            case 'b':
                obj.desplegar();
                break;
            case 'c':
                obj.ordenar();
                break;
            case 'd':
                console.log("Número de pasadas: " + obj.pasadas);
                console.log("Número de comparaciones: " + obj.comparaciones);
                console.log("Número de intercambios: " + obj.intercambios);
                console.log("Programa finalizado");
                break;
            default:
                console.log("Opcion invalida, intente otra vez.");
                break;
        }
    } while (opc !== 'd');
}

start();
