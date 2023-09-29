class Secuencial {
    constructor() {
        this.estados = ["Morelos", "Michoacan", "Nayarit", "Estado de Mexico", "Aguascalientes", "Zacatecas", "Baja California", "Veracruz", "Yucatan", "Baja California Sur", "Ciudad de Mexico", "Campeche", "Chihuahua", "Chiapas", "Tabasco", "Tlaxcala", "Coahuila", "Sonora", "Colima", "Sinaloa", "Durango", "Guanajuato", "Quintana Roo", "San Luis Potosi", "Hidalgo", "Oaxaca", "Jalisco", "Nuevo Leon", "Tamaulipas", "Queretaro", "Puebla", "Durango"];
        this.N = 32;
        this.found = false;
        this.PASADAS = 0;
        this.COMPARACIONES = 0;
    }

    generar() {
        // This method is essentially a placeholder as the original code doesn't really "generate" anything new.
    }

    desplegar() {
        console.log("Estados de México");
        this.estados.forEach((estado, index) => {
            console.log((index + 1) + " " + estado);
        });
    }

    buscar() {
        console.log("Ingrese el estado que desea encontrar: ");
        // Simulating user input in Node.js would typically involve something like the readline module.
        let key = ""; // This would be read from the user.

        this.found = false;
        let I = 0;

        this.PASADAS++;
        while (I < this.N && !this.found) {
            this.COMPARACIONES++;
            if (key === this.estados[I]) {
                this.found = true;
            } else {
                I++;
            }
        }

        if (!this.found) {
            console.log("No esta el elemento " + key + " en el arreglo");
        } else {
            console.log("El elemento " + key + " esta en la posicion: " + (I + 1));
        }
    }
}

let M = new Secuencial();

let OPS;
do {
    console.clear(); // Note: This might not work in all environments.

    console.log("Bienvenido al menu, por favor seleccione una de las siguientes opciones.");
    console.log("a) Generar el Arreglo.");
    console.log("b) Desplegar el Arreglo y buscar un Elemento.");
    console.log("c) Salir Del Programa.");
    console.log("Ingrese la opcion a ejecutar: ");

    // Simulate user input. You'd use readline or some other input mechanism in a real program.
    OPS = "";  // Get user input

    switch (OPS) {
        case 'a':
            M.generar();
            console.log("Los estados fueron generados.");
            break;
        case 'b':
            M.desplegar();
            M.buscar();
            break;
        case 'c':
            console.log("Gracias por usar el programa.");
            break;
        default:
            console.log("La opcion que eligio no es correcta, por favor intente de nuevo.");
            break;
    }

} while (OPS !== 'c');
