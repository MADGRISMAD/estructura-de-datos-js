class Estados {
    constructor() {
        this.temp = " ";
        this.n = 32;
        this.posiciones = 0;
        this.comparaciones = 0;
        this.intercambios = 0;
        this.arreglo = ["Morelos", "Michoacan", "Nayarit", "Estado de Mexico", "Aguascalientes", "Zacatecas", "Baja California", "Veracruz", "Yucatan", "Baja California Sur", "Ciudad de Mexico", "Campeche", "Chihuahua", "Chiapas", "Tabasco", "Tlaxcala", "Coahuila", "Sonora", "Colima", "Sinaloa", "Durango", "Guanajuato", "Quintana Roo", "San Luis Potosi", "Hidalgo", "Oaxaca", "Jalisco", "Nuevo Leon", "Tamaulipas", "Queretaro", "Puebla", "Mexicali"];
    }

    generar() {
        // Not applicable in JS since the array is static.
    }

    desplegar() {
        console.log("\nLos 32 estados son: ");
        this.arreglo.forEach((estado, index) => {
            console.log(`Estado [${index + 1}] = ${estado}`);
        });
    }

    ordenar() {
        for (let a = 0; a < this.arreglo.length - 1; a++) {
            this.posiciones++;
            for (let b = 0; b < this.arreglo.length - 1 - a; b++) {
                this.comparaciones++;
                if (this.arreglo[b] > this.arreglo[b + 1]) {
                    this.intercambios++;
                    this.temp = this.arreglo[b];
                    this.arreglo[b] = this.arreglo[b + 1];
                    this.arreglo[b + 1] = this.temp;
                }
            }
        }
    }
}

const Menu = () => {
    let b = new Estados();
    let OPS;

    do {
        console.clear();
        console.log("Bienvenido al menu, por favor seleccione una de las siguientes opciones.. ");
        console.log("\na) Inicializar el arreglo. ");
        console.log("\nb) Desplegar el arreglo. ");
        console.log("\nc) Ordenar el Arreglo. ");
        console.log("\nd) Salir Del Programa. ");

        OPS = prompt("Ingrese la opción a ejecutar: ");

        switch (OPS) {
            case 'a':
                b = new Estados();
                b.generar();
                alert("\nEl arreglo se ha generado correctamente. ");
                break;
            case 'b':
                b.desplegar();
                alert("\nEl arreglo se ha desplegado correctamente.");
                break;
            case 'c':
                b.ordenar();
                alert("\nEl arreglo se ha ordenado correctamente.");
                break;
            case 'd':
                console.log("Gracias por usar el programa.");
                break;
            default:
                alert("\nLa opción que eligió no es correcta, por favor intente de nuevo.");
                break;
        }

    } while (OPS !== 'd');
}

Menu();
