class Quick {
    constructor() {
        this.comparaciones = 0;
        this.intercambios = 0;
        this.pasadas = 0;
        this.Capitales = [
            "Aguascalientes", "Mexicali", "La Paz", "Campeche", "Tuxtla Gutiérrez", "Chihuahua",
            "Ciudad de México", "Saltillo", "Colima", "Durango", "Toluca", "Guanajuato", "Chilpancingo", "Pachuca",
            "Guadalajara", "Morelia", "Cuernavaca", "Tepic", "Monterrey", "Oaxaca", "Puebla", "Querétaro", "Chetumal",
            "San Luis Potosí", "Culiacán", "Hermosillo", "Villahermosa", "Ciudad Victoria", "Tlaxcala", "Xalapa", "Mérida", "Zacatecas"
        ];
    }

    iniciar() {
        console.log("\nArreglo creado");
    }

    desplegar() {
        this.Capitales.forEach((capital, index) => {
            console.log(`[${index + 1}] = ${capital}`);
        });
    }

    ordenar(L, R) {
        let i = L;
        let j = R;
        let x = this.Capitales[Math.floor((L + R) / 2)];
        this.pasadas++;

        do {
            while (this.Capitales[i] < x) {
                i++;
                this.comparaciones++;
            }
            while (this.Capitales[j] > x) {
                j--;
                this.comparaciones++;
            }
            if (i <= j) {
                const temp = this.Capitales[i];
                this.Capitales[i] = this.Capitales[j];
                this.Capitales[j] = temp;
                i++;
                j--;
                this.intercambios++;
            }
        } while (i <= j);

        if (L < j) this.ordenar(L, j);
        if (i < R) this.ordenar(i, R);
    }
}

const start = () => {
    const obj = new Quick();
    let opc;
    do {
        console.clear();
        console.log("METODO DE QUICK DE CAPITALES");
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
                obj.ordenar(0, obj.Capitales.length - 1);
                console.log("Arreglo ordenado correctamente");
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
