// class Camiseta {
//     constructor(codigo,marca,equipo,modelo,temporada,) {
//         this.codigo = codigo;
//         this.marca = marca;
//         this.equipo = equipo;
//         this.modelo = modelo;
//         this.temporada = parseInt(temporada);
//     }
// }

let titulo = document.getElementById("titulo");
titulo.innerHTML="Le cambié el titulo";























// class Camiseta {
//     constructor(nombre, modelo, talle, precio) {
//         this.nombre = nombre;
//         this.modelo = modelo;
//         this.talle = talle;
//         this.precio = parseFloat(precio);
//     }

//     // mostrarPedido() {
//     //     alert(`El pedido realizado fue: \n
//     //            La camiseta del ${this.nombre} ${this.modelo} en talle ${this.talle}`);
//     // }
// }



// const stock = [];
// let cantidadDeposito = 4;

// do {
//     let equipo = prompt("Ingresar nombre del equipo");
//     let modelo = prompt("Ingrese el modelo de la camiseta (Titular, Suplente o Alternativa)");
//     let talle = prompt("Ingrese el talle");
//     let precio = prompt("Ingrese el valor")
//     stock.push(new Camiseta(equipo, modelo, talle, precio));
// }while(stock.length != cantidadDeposito)

// stock.sort((a,b) => {
//     const equipoA = a.nombre.toLowerCase();
//     const equipoB = b.nombre.toLowerCase();
//     if (equipoA < equipoB) {
//         return -1;
//     }
    
//     if (equipoA > equipoB) {
//         return 1;
//     }

//     return 0;

// });

// console.log(stock);


















// // Lista de pedidos por dia
// const pedidosDia = [];

// // Método para agregar un pedido a la lista
// const create = (pedido) => {
//     pedidosDia.push(pedido)
// }

// // Método que returna la lista de pedidos
// const getAll = () => {
//     return pedidosDia;
// }

// alert("Bienvenid@ a CH Camisetas \n ¿Que camiseta estaba buscando?")
// let nombreCamiseta = prompt("Ingrese el nombre del equipo")
// let modeloCamiseta = prompt("Ingrese el modelo de la camiseta (Titular, Suplente o Alternativa)")
// let talleCamiseta = prompt("Ingrese el talle")

// const pedido1 = new Camiseta (nombreCamiseta, modeloCamiseta, talleCamiseta);

// create(pedido1);

// console.log(getAll());
// pedido1.mostrarPedido();