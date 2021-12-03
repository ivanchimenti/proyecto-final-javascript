$.ajax({
    url: "./productos.json",            
    type: "GET",        
    dataType: "json"    
})
.done(function(elementos){
var productos = elementos.Productos.length
console.log(productos)});

let arrayProductos = [];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

let products = document.getElementById("products");

productos.forEach(producto => {

    let img = document.createElement("img");
    img.className = "card-img-top";
    let div = document.createElement("div");
    div.className = "card-body";
    let h5 = document.createElement("h5");
    h5.className = "card.title";
    let p = document.createElement("p");
    p.className = "card-text";
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    a.onclick = () => {alert(`¡Felicidades ${nombreIngresado}, agregaste la camiseta al carrito!`)}
    let hr = document.createElement("hr");



    img.src = "images/img-products/espania/"+ producto.img;
    h5.innerHTML += producto.nombre;
    p.innerHTML += "$" + producto.precio;
    a.innerHTML += "Comprar";
    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(a);
    div.appendChild(hr);
    products.appendChild(div);
})



let nombreIngresado = prompt("Ingrese su nombre");

let etiqueta = document.getElementById("saludo");

etiqueta.innerHTML = `Bienvenido ${nombreIngresado}`;