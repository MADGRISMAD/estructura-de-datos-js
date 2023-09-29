class Arbol {
    constructor() {
        this.info = "";
        this.izq = null;
        this.der = null;
        this.raiz = null;
    }

    insertar(elemento) {
        let bandera = 0;
        let hoja = new Arbol();
        hoja.info = elemento;

        if (this.raiz === null) {
            this.raiz = hoja;
        } else {
            let temp = this.raiz;
            while (bandera !== 1) {
                if (hoja.info.localeCompare(temp.info) < 0) {
                    if (temp.izq === null) {
                        temp.izq = hoja;
                        bandera = 1;
                    } else {
                        temp = temp.der;
                    }
                } else {
                    if (temp.der === null) {
                        temp.der = hoja;
                        bandera = 1;
                    } else {
                        temp = temp.der;
                    }
                }
            }
        }
    }

    preorden(temp) {
        if (temp !== null) {
            console.log(temp.info);
            if (temp.izq !== null) {
                this.preorden(temp.izq);
            }
            if (temp.der !== null) {
                this.preorden(temp.der);
            }
        } else {
            console.log("\nEl Arbol Binario esta Vacio");
        }
    }

    inorden(temp) {
        if (temp !== null) {
            if (temp.izq !== null) {
                this.inorden(temp.izq);
            }
            console.log(temp.info);
            if (temp.der !== null) {
                this.inorden(temp.der);
            }
        } else {
            console.log("\nEl Arbol Binario esta Vacio");
        }
    }

    posorden(temp) {
        if (temp !== null) {
            if (temp.izq !== null) {
                this.posorden(temp.izq);
            }
            if (temp.der !== null) {
                this.posorden(temp.der);
            }
            console.log(temp.info);
        } else {
            console.log("\nEl Arbol binario esta Vacio");
        }
    }

    busquedaRecursiva(temp, key) {
        if (temp === null) {
            console.log("\nNo esta el nodo " + key + " en el Arbol Binario");
        } else {
            if (key === temp.info) {
                console.log("\nEl nodo " + key + " Si esta en el Arbol Binario");
            } else {
                if (key.localeCompare(temp.info) < 0) {
                    this.busquedaRecursiva(temp.izq, key);
                } else {
                    this.busquedaRecursiva(temp.der, key);
                }
            }
        }
    }

    busquedaIterativa(temp, key) {
        let encontrado = false;

        while (temp !== null && encontrado === false) {
            if (key === temp.info) {
                encontrado = true;
            } else {
                if (key.localeCompare(temp.info) < 0) {
                    temp = temp.izq;
                } else {
                    temp = temp.der;
                }
            }
        }
        if (encontrado === false) {
            console.log("\nEl nodo " + key + " No esta en el Arbol Binario");
        } else {
            console.log("\nEl nodo " + key + " Si esta en el Arbol Binario");
        }
    }

    // Method for elimination and other logic will follow a similar pattern.

    // Destructor equivalent in JavaScript (not needed, but shown for comparison)
    destructor() {
        console.log("La memoria de la clase fue liberada");
    }
}

// The main method and related code are omitted here, as JavaScript doesn't typically have a 'Main' method in the same way C# does. Depending on where you run this, you might need to adapt the code to work with your environment.
