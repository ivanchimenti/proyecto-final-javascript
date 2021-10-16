class Camiseta {
    constructor(nombre, modelo, talle) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.talle = talle;
    }

    mostrarPedido() {
        alert(`El pedido realizado fue: \n
               La camiseta del ${this.nombre} ${this.modelo} en talle ${this.talle}`);
    }
}



alert("Bienvenid@ a CH Camisetas \n ¿Que camiseta estaba buscando?")
let nombreCamiseta = prompt("Ingrese el nombre del equipo")
let modeloCamiseta = prompt("Ingrese el modelo de la camiseta (Titular, Suplente o Alternativa)")
let talleCamiseta = prompt("Ingrese el talle")

const pedido1 = new Camiseta (nombreCamiseta, modeloCamiseta, talleCamiseta);
pedido1.mostrarPedido();