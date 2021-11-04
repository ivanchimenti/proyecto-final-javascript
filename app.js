let productos = [
    {
        "id": 1,
        "nombre": "Camiseta Titular del Barcelona",
        "precio": 1500,
        "stock": 20,
        "img": "/images/img-products/espania/barcelona-titular-1.jpg"
    },
    {
        "id": 2,
        "nombre": "Camiseta Titular del Real Madrid",
        "precio": 1500,
        "stock": 13,
        "img": ".../.../rm-titular-1.jpg"
    },
    {
        "id": 3,
        "nombre": "Camiseta Titular del Atletico",
        "precio": 1500,
        "stock": 8,
        "img": "atm-titular-1.jpg"
    },
];

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
    let hr = document.createElement("hr");



    img.src = "img/"+ producto.img;
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

